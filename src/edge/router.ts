import { Hono } from "hono";
import * as crypto from "crypto";
import { getFromCache, setToCache, invalidateCache } from "./cache";
import { NotionClient } from "../core/client";
import { parseNotionBlocks, ASTNode } from "../core/ast";
import { fetchDatabaseEntries } from "../core/database";
import { astToMarkdown } from "../converters/markdown";
import { cacheAsset, getAssetPath } from "./assets";
import * as fs from "fs";

const app = new Hono();

// Optional: Provide auth token via env var
const token = process.env.NOTION_TOKEN || "dummy_token";
export const client = new NotionClient({ auth: token });

// Helper to recursively process assets in AST
async function processAssetsInAST(nodes: ASTNode[]): Promise<void> {
  for (const node of nodes) {
    if ((node.type === 'image' || node.type === 'video' || node.type === 'file') && node.url) {
      if (node.url.startsWith('http')) {
        try {
          const filename = await cacheAsset(node.url);
          // Rewrite the URL to our edge router's asset endpoint
          node.url = `/assets/${filename}`;
        } catch (err) {
          console.error(`Failed to cache asset ${node.url}:`, err);
        }
      }
    }
    if (node.children && node.children.length > 0) {
      await processAssetsInAST(node.children);
    }
  }
}

// Health check endpoint
app.get("/health", (c) => c.text("OK"));

// Asset retrieval route
app.get("/assets/:id", async (c) => {
  const filename = c.req.param("id");
  const filepath = getAssetPath(filename);
  
  if (fs.existsSync(filepath)) {
    const buffer = fs.readFileSync(filepath);
    // basic content-type inference
    let mime = "application/octet-stream";
    if (filename.endsWith('.png')) mime = "image/png";
    if (filename.endsWith('.jpg') || filename.endsWith('.jpeg')) mime = "image/jpeg";
    if (filename.endsWith('.gif')) mime = "image/gif";
    if (filename.endsWith('.svg')) mime = "image/svg+xml";
    if (filename.endsWith('.webp')) mime = "image/webp";
    
    c.header("Content-Type", mime);
    c.header("Cache-Control", "public, max-age=31536000, immutable"); // Cache forever
    return c.body(buffer);
  }
  
  return c.text("Asset not found", 404);
});

// Page retrieval route
app.get("/page/:id", async (c) => {
  const pageId = c.req.param("id");

  // 1. Check cache
  const cachedMarkdown = getFromCache(pageId);
  if (cachedMarkdown) {
    c.header("X-Cache", "HIT");
    return c.text(cachedMarkdown);
  }

  c.header("X-Cache", "MISS");

  try {
    // 2. Fetch all blocks for the page
    const response = await client.blocks.children.list({ block_id: pageId });
    
    // 3. Convert to Universal AST
    const ast = parseNotionBlocks(response.results);
    
    // 3.5 Intercept and cache assets to solve expiring URL issue
    await processAssetsInAST(ast);

    // 4. Convert AST to Markdown
    const markdown = astToMarkdown(ast);

    // 5. Store in cache
    setToCache(pageId, markdown);

    return c.text(markdown);
  } catch (error: any) {
    console.error("Error fetching page:", error.message);
    return c.text("Failed to fetch or parse page.", 500);
  }
});

// Database retrieval route
app.get("/database/:id", async (c) => {
  const dbId = c.req.param("id");

  // 1. Check cache
  const cacheKey = `db_${dbId}`;
  const cachedDb = getFromCache(cacheKey);
  if (cachedDb) {
    c.header("X-Cache", "HIT");
    c.header("Content-Type", "application/json");
    return c.body(cachedDb);
  }

  c.header("X-Cache", "MISS");

  try {
    // 2. Fetch and normalize entries
    const entries = await fetchDatabaseEntries(client, dbId);
    
    const jsonStr = JSON.stringify(entries);

    // 3. Store in cache
    setToCache(cacheKey, jsonStr);

    c.header("Content-Type", "application/json");
    return c.body(jsonStr);
  } catch (error: any) {
    console.error("Error fetching database:", error.message);
    return c.text("Failed to fetch database.", 500);
  }
});

// Webhook cache invalidation route
app.post("/webhook/notion", async (c) => {
  const secret = process.env.NOTION_WEBHOOK_SECRET;
  const signature = c.req.header("x-notion-signature");

  const rawBody = await c.req.text();
  
  if (secret && signature) {
    const hmac = crypto.createHmac("sha256", secret);
    hmac.update(rawBody);
    const expectedSignature = hmac.digest("hex");
    
    if (signature !== expectedSignature) {
      return c.text("Invalid signature", 401);
    }
  } else if (secret && !signature) {
    return c.text("Missing signature", 401);
  }

  try {
    const payload = JSON.parse(rawBody);
    
    let idToInvalidate: string | null = null;
    
    if (payload.data && payload.data.id) {
      idToInvalidate = payload.data.id;
    } else if (payload.source && payload.source.id) {
      idToInvalidate = payload.source.id;
    } else if (payload.id) {
      idToInvalidate = payload.id;
    }
    
    if (idToInvalidate) {
      invalidateCache(idToInvalidate);
      invalidateCache(`db_${idToInvalidate}`);
      return c.text(`Invalidated cache for ${idToInvalidate}`);
    }
    
    return c.text("No ID found in payload to invalidate", 400);
  } catch (err: any) {
    console.error("Webhook processing error:", err.message);
    return c.text("Bad request", 400);
  }
});

export { app };
