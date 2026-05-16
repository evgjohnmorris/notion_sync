"use strict";
var __create = Object.create;
var __defProp = Object.defineProperty;
var __getOwnPropDesc = Object.getOwnPropertyDescriptor;
var __getOwnPropNames = Object.getOwnPropertyNames;
var __getProtoOf = Object.getPrototypeOf;
var __hasOwnProp = Object.prototype.hasOwnProperty;
var __export = (target, all) => {
  for (var name in all)
    __defProp(target, name, { get: all[name], enumerable: true });
};
var __copyProps = (to, from, except, desc) => {
  if (from && typeof from === "object" || typeof from === "function") {
    for (let key of __getOwnPropNames(from))
      if (!__hasOwnProp.call(to, key) && key !== except)
        __defProp(to, key, { get: () => from[key], enumerable: !(desc = __getOwnPropDesc(from, key)) || desc.enumerable });
  }
  return to;
};
var __toESM = (mod, isNodeMode, target) => (target = mod != null ? __create(__getProtoOf(mod)) : {}, __copyProps(
  // If the importer is in node compatibility mode or this is not an ESM
  // file that has been converted to a CommonJS file using a Babel-
  // compatible transform (i.e. "__esModule" has not been set), then set
  // "default" to the CommonJS "module.exports" for node compatibility.
  isNodeMode || !mod || !mod.__esModule ? __defProp(target, "default", { value: mod, enumerable: true }) : target,
  mod
));
var __toCommonJS = (mod) => __copyProps(__defProp({}, "__esModule", { value: true }), mod);

// src/index.ts
var index_exports = {};
__export(index_exports, {
  NotionClient: () => NotionClient,
  NotionRenderer: () => NotionRenderer,
  astToMarkdown: () => astToMarkdown,
  edgeRouter: () => app,
  fetchDatabaseEntries: () => fetchDatabaseEntries,
  fetchNotionPage: () => fetchNotionPage,
  invalidateCache: () => invalidateCache,
  markdownToAst: () => markdownToAst,
  parseNotionBlocks: () => parseNotionBlocks
});
module.exports = __toCommonJS(index_exports);

// src/core/client.ts
var import_client = require("@notionhq/client");

// src/core/queue.ts
var RequestQueue = class {
  queue = [];
  processing = false;
  /**
   * Adds a new request task to the queue.
   */
  async add(task) {
    return new Promise((resolve, reject) => {
      this.queue.push(async () => {
        try {
          const result = await task();
          resolve(result);
        } catch (error) {
          reject(error);
        }
      });
      this.process();
    });
  }
  /**
   * Processes the queue sequentially.
   */
  async process() {
    if (this.processing || this.queue.length === 0) {
      return;
    }
    this.processing = true;
    while (this.queue.length > 0) {
      const task = this.queue.shift();
      if (task) {
        await task();
      }
    }
    this.processing = false;
  }
  /**
   * Delay execution for a given number of milliseconds.
   */
  async delay(ms) {
    return new Promise((resolve) => setTimeout(resolve, ms));
  }
};

// src/core/client.ts
var NotionClient = class {
  client;
  queue;
  constructor(options) {
    this.client = new import_client.Client({ auth: options.auth });
    this.queue = new RequestQueue();
  }
  /**
   * Helper to execute a Notion API call through the global queue.
   */
  execute(task) {
    return this.queue.add(async () => {
      try {
        return await task();
      } catch (error) {
        if (error.status === 429) {
          const retryAfter = error.headers?.get?.("retry-after");
          const delayMs = retryAfter ? parseInt(retryAfter) * 1e3 : 1e3;
          console.warn(`[NotionClient] Rate limited. Pausing queue for ${delayMs}ms...`);
          await this.queue.delay(delayMs);
          return await task();
        }
        throw error;
      }
    });
  }
  // Define essential Notion API methods mapped to the queue
  get users() {
    return {
      me: () => this.execute(() => this.client.users.me({}))
    };
  }
  get pages() {
    return {
      retrieve: (args) => this.execute(() => this.client.pages.retrieve(args)),
      create: (args) => this.execute(() => this.client.pages.create(args)),
      update: (args) => this.execute(() => this.client.pages.update(args))
    };
  }
  get databases() {
    return {
      retrieve: (args) => this.execute(() => this.client.databases.retrieve(args)),
      create: (args) => this.execute(() => this.client.databases.create(args)),
      update: (args) => this.execute(() => this.client.databases.update(args))
    };
  }
  get dataSources() {
    return {
      retrieve: (args) => this.execute(() => this.client.dataSources.retrieve(args)),
      query: (args) => this.execute(() => this.client.dataSources.query(args))
    };
  }
  get blocks() {
    return {
      retrieve: (args) => this.execute(() => this.client.blocks.retrieve(args)),
      update: (args) => this.execute(() => this.client.blocks.update(args)),
      delete: (args) => this.execute(() => this.client.blocks.delete(args)),
      children: {
        append: (args) => this.execute(() => this.client.blocks.children.append(args)),
        list: (args) => this.execute(() => this.client.blocks.children.list(args))
      }
    };
  }
  get search() {
    return (args) => this.execute(() => this.client.search(args));
  }
};

// src/core/database.ts
function normalizeProperty(prop) {
  switch (prop.type) {
    case "title":
      return prop.title.map((t) => t.plain_text).join("");
    case "rich_text":
      return prop.rich_text.map((t) => t.plain_text).join("");
    case "number":
      return prop.number;
    case "select":
      return prop.select?.name || null;
    case "multi_select":
      return prop.multi_select.map((s) => s.name);
    case "date":
      return prop.date?.start || null;
    case "checkbox":
      return prop.checkbox;
    case "url":
      return prop.url;
    case "email":
      return prop.email;
    case "phone_number":
      return prop.phone_number;
    case "formula":
      return prop.formula[prop.formula.type];
    case "relation":
      return prop.relation.map((r) => r.id);
    case "rollup":
      return prop.rollup[prop.rollup.type];
    default:
      return null;
  }
}
async function fetchDatabaseEntries(client2, databaseId) {
  const entries = [];
  let hasMore = true;
  let nextCursor = void 0;
  while (hasMore) {
    const response = await client2.dataSources.query({
      data_source_id: databaseId,
      start_cursor: nextCursor
    });
    for (const page of response.results) {
      const properties = {};
      for (const [key, value] of Object.entries(page.properties)) {
        properties[key] = normalizeProperty(value);
      }
      entries.push({
        id: page.id,
        url: page.url,
        createdAt: page.created_time,
        updatedAt: page.last_edited_time,
        properties
      });
    }
    hasMore = response.has_more;
    nextCursor = response.next_cursor || void 0;
  }
  return entries;
}

// src/core/ast.ts
function parseNotionBlocks(blocks) {
  return blocks.map((block) => {
    const type = block.type;
    const content = block[type];
    const node = {
      id: block.id,
      type
    };
    if (content?.rich_text) {
      node.richText = content.rich_text.map((rt) => ({
        type: rt.type,
        text: rt.plain_text,
        annotations: rt.annotations,
        link: rt.href
      }));
    }
    if (type === "code" && content?.language) {
      node.codeLanguage = content.language;
    }
    if (type === "to_do" && content?.checked !== void 0) {
      node.checked = content.checked;
    }
    if ((type === "image" || type === "video" || type === "file" || type === "bookmark") && content) {
      node.url = content.type === "external" ? content.external.url : content.file?.url || content.url;
    }
    if (content?.color) {
      node.color = content.color;
    }
    if (block.has_children && block.children) {
      node.children = parseNotionBlocks(block.children);
    }
    return node;
  });
}

// src/adapters/react/NotionRenderer.tsx
var import_react = __toESM(require("react"));
var import_jsx_runtime = require("react/jsx-runtime");
var DefaultRenderers = {
  heading_1: ({ node, children }) => /* @__PURE__ */ (0, import_jsx_runtime.jsx)("h1", { style: { marginTop: "2em", marginBottom: "1em" }, children }),
  heading_2: ({ node, children }) => /* @__PURE__ */ (0, import_jsx_runtime.jsx)("h2", { style: { marginTop: "1.5em", marginBottom: "0.75em" }, children }),
  heading_3: ({ node, children }) => /* @__PURE__ */ (0, import_jsx_runtime.jsx)("h3", { style: { marginTop: "1.17em", marginBottom: "0.5em" }, children }),
  paragraph: ({ node, children }) => /* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", { style: { marginBottom: "1em", lineHeight: 1.5 }, children }),
  bulleted_list_item: ({ node, children }) => /* @__PURE__ */ (0, import_jsx_runtime.jsx)("li", { children }),
  numbered_list_item: ({ node, children }) => /* @__PURE__ */ (0, import_jsx_runtime.jsx)("li", { children }),
  code: ({ node }) => {
    const language = node.codeLanguage || "text";
    const content = node.richText?.map((c) => c.text).join("") || "";
    return /* @__PURE__ */ (0, import_jsx_runtime.jsx)("pre", { style: { background: "#f4f4f4", padding: "1em", borderRadius: "4px", overflowX: "auto" }, children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)("code", { className: `language-${language}`, children: content }) });
  },
  quote: ({ node, children }) => /* @__PURE__ */ (0, import_jsx_runtime.jsx)("blockquote", { style: { borderLeft: "4px solid #ccc", margin: "1em 0", paddingLeft: "1em", color: "#666" }, children })
};
var NotionRenderer = ({ nodes, components }) => {
  const renderers = { ...DefaultRenderers, ...components };
  const renderRichText = (textItems) => {
    if (!textItems) return null;
    return textItems.map((item, i) => {
      let element = /* @__PURE__ */ (0, import_jsx_runtime.jsx)(import_react.default.Fragment, { children: item.text }, i);
      if (item.annotations?.bold) element = /* @__PURE__ */ (0, import_jsx_runtime.jsx)("strong", { children: element }, i);
      if (item.annotations?.italic) element = /* @__PURE__ */ (0, import_jsx_runtime.jsx)("em", { children: element }, i);
      if (item.annotations?.strikethrough) element = /* @__PURE__ */ (0, import_jsx_runtime.jsx)("del", { children: element }, i);
      if (item.annotations?.code) element = /* @__PURE__ */ (0, import_jsx_runtime.jsx)("code", { style: { background: "#eee", padding: "0.2em 0.4em", borderRadius: "3px" }, children: element }, i);
      if (item.link) {
        element = /* @__PURE__ */ (0, import_jsx_runtime.jsx)("a", { href: item.link, target: "_blank", rel: "noopener noreferrer", style: { color: "#0366d6", textDecoration: "none" }, children: element }, i);
      }
      return element;
    });
  };
  const renderNode = (node, index) => {
    const Renderer = renderers[node.type];
    const children = node.richText ? renderRichText(node.richText) : null;
    if (!Renderer) {
      return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", { style: { color: "red" }, children: [
        "Unsupported block type: ",
        node.type
      ] }, node.id || index);
    }
    return /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Renderer, { node, children }, node.id || index);
  };
  const processedNodes = [];
  let currentListType = null;
  let currentListItems = [];
  const flushList = (key) => {
    if (currentListType === "ul") {
      processedNodes.push(/* @__PURE__ */ (0, import_jsx_runtime.jsx)("ul", { style: { paddingLeft: "2em", marginBottom: "1em" }, children: currentListItems }, key));
    } else if (currentListType === "ol") {
      processedNodes.push(/* @__PURE__ */ (0, import_jsx_runtime.jsx)("ol", { style: { paddingLeft: "2em", marginBottom: "1em" }, children: currentListItems }, key));
    }
    currentListType = null;
    currentListItems = [];
  };
  nodes.forEach((node, i) => {
    if (node.type === "bulleted_list_item") {
      if (currentListType && currentListType !== "ul") flushList(`list-${i}-flush`);
      currentListType = "ul";
      currentListItems.push(renderNode(node, i));
    } else if (node.type === "numbered_list_item") {
      if (currentListType && currentListType !== "ol") flushList(`list-${i}-flush`);
      currentListType = "ol";
      currentListItems.push(renderNode(node, i));
    } else {
      if (currentListType) flushList(`list-${i}-flush`);
      processedNodes.push(renderNode(node, i));
    }
  });
  if (currentListType) flushList(`list-end-flush`);
  return /* @__PURE__ */ (0, import_jsx_runtime.jsx)(import_jsx_runtime.Fragment, { children: processedNodes });
};

// src/converters/markdown/builder.ts
function astToMarkdown(nodes) {
  let markdown = "";
  for (const node of nodes) {
    markdown += nodeToMarkdown(node) + "\n\n";
  }
  return markdown.trim();
}
function nodeToMarkdown(node, indentLevel = 0) {
  const indent = "  ".repeat(indentLevel);
  let content = "";
  if (node.richText) {
    content = richTextToMarkdown(node.richText);
  }
  let result = "";
  switch (node.type) {
    case "heading_1":
      result = `${indent}# ${content}`;
      break;
    case "heading_2":
      result = `${indent}## ${content}`;
      break;
    case "heading_3":
      result = `${indent}### ${content}`;
      break;
    case "paragraph":
      result = `${indent}${content}`;
      break;
    case "bulleted_list_item":
      result = `${indent}- ${content}`;
      break;
    case "numbered_list_item":
      result = `${indent}1. ${content}`;
      break;
    case "to_do":
      result = `${indent}- [${node.checked ? "x" : " "}] ${content}`;
      break;
    case "toggle":
      result = `${indent}<details><summary>${content}</summary>`;
      break;
    case "quote":
      result = `${indent}> ${content}`;
      break;
    case "code":
      result = `${indent}\`\`\`${node.codeLanguage || ""}
${indent}${content}
${indent}\`\`\``;
      break;
    case "divider":
      result = `${indent}---`;
      break;
    case "image":
    case "video":
    case "file":
    case "bookmark":
      result = `${indent}[${content || node.url}](${node.url})`;
      break;
    case "callout":
      result = `${indent}> \u{1F4A1} ${content}`;
      break;
    // For tables and other complex blocks, a simple rendering is provided here.
    default:
      result = `${indent}${content}`;
      break;
  }
  if (node.children && node.children.length > 0) {
    const childrenMd = node.children.map((child) => nodeToMarkdown(child, indentLevel + 1)).join("\n");
    if (node.type === "toggle") {
      result += `
${childrenMd}
${indent}</details>`;
    } else {
      result += `
${childrenMd}`;
    }
  } else if (node.type === "toggle") {
    result += `</details>`;
  }
  return result;
}
function richTextToMarkdown(richText) {
  return richText.map((rt) => {
    let text = rt.text;
    if (rt.annotations) {
      if (rt.annotations.bold) text = `**${text}**`;
      if (rt.annotations.italic) text = `*${text}*`;
      if (rt.annotations.strikethrough) text = `~~${text}~~`;
      if (rt.annotations.code) text = `\`${text}\``;
    }
    if (rt.link) {
      text = `[${text}](${rt.link})`;
    }
    return text;
  }).join("");
}

// src/converters/markdown/parser.ts
var import_marked = require("marked");
function markdownToAst(markdown) {
  const tokens = import_marked.marked.lexer(markdown);
  return tokensToAst(tokens);
}
function tokensToAst(tokens) {
  const nodes = [];
  for (const token2 of tokens) {
    const parsed = tokenToAstNode(token2);
    if (Array.isArray(parsed)) {
      nodes.push(...parsed);
    } else if (parsed) {
      nodes.push(parsed);
    }
  }
  return nodes;
}
function tokenToAstNode(token2) {
  switch (token2.type) {
    case "heading": {
      const t = token2;
      let type = "heading_1";
      if (t.depth === 2) type = "heading_2";
      if (t.depth >= 3) type = "heading_3";
      return {
        type,
        richText: parseInlineText(t.text)
      };
    }
    case "paragraph": {
      const t = token2;
      return {
        type: "paragraph",
        richText: parseInlineText(t.text)
      };
    }
    case "list": {
      const t = token2;
      const listNodes = [];
      const itemType = t.ordered ? "numbered_list_item" : "bulleted_list_item";
      for (const item of t.items) {
        listNodes.push({
          type: itemType,
          richText: parseInlineText(item.text)
        });
      }
      return listNodes;
    }
    case "code": {
      const t = token2;
      return {
        type: "code",
        codeLanguage: t.lang || "plain text",
        richText: [{ type: "text", text: t.text, annotations: defaultAnnotations() }]
      };
    }
    case "blockquote": {
      const t = token2;
      return {
        type: "quote",
        richText: parseInlineText(t.text)
      };
    }
    case "hr": {
      return { type: "divider" };
    }
  }
  return null;
}
function defaultAnnotations() {
  return {
    bold: false,
    italic: false,
    strikethrough: false,
    underline: false,
    code: false,
    color: "default"
  };
}
function parseInlineText(text) {
  try {
    const inlineTokens = import_marked.marked.Lexer.lexInline(text);
    return inlineTokens.map((t) => {
      const annotations = defaultAnnotations();
      let content = t.raw;
      let link = void 0;
      if (t.type === "strong") annotations.bold = true;
      if (t.type === "em") annotations.italic = true;
      if (t.type === "del") annotations.strikethrough = true;
      if (t.type === "codespan") annotations.code = true;
      if (t.type === "link") {
        const linkToken = t;
        link = linkToken.href;
        content = linkToken.text;
      } else if (t.type === "strong" || t.type === "em" || t.type === "del" || t.type === "codespan") {
        content = t.text || t.raw;
      }
      return {
        type: "text",
        text: content,
        annotations,
        link
      };
    });
  } catch (e) {
    return [{
      type: "text",
      text,
      annotations: defaultAnnotations()
    }];
  }
}

// src/adapters/nextjs/fetcher.ts
async function fetchNotionPage(edgeRouterUrl, pageId, options) {
  const response = await fetch(`${edgeRouterUrl.replace(/\/$/, "")}/page/${pageId}`, {
    ...options,
    headers: {
      "Accept": "application/json",
      ...options?.headers
    }
  });
  if (!response.ok) {
    throw new Error(`Failed to fetch Notion page from Edge Router: ${response.statusText}`);
  }
  const markdown = await response.text();
  const ast = markdownToAst(markdown);
  return ast;
}

// src/edge/router.ts
var import_hono = require("hono");
var crypto2 = __toESM(require("crypto"));

// src/edge/cache.ts
var import_lru_cache = require("lru-cache");
var edgeCache = new import_lru_cache.LRUCache({
  max: 500,
  // Maximum number of items in the cache
  ttl: 1e3 * 60
  // 60 seconds TTL
});
function getFromCache(key) {
  return edgeCache.get(key);
}
function setToCache(key, value) {
  edgeCache.set(key, value);
}
function invalidateCache(key) {
  edgeCache.delete(key);
}

// src/edge/assets.ts
var fs = __toESM(require("fs"));
var path = __toESM(require("path"));
var import_crypto = __toESM(require("crypto"));
var ASSETS_DIR = path.join(process.cwd(), ".assets");
if (!fs.existsSync(ASSETS_DIR)) {
  fs.mkdirSync(ASSETS_DIR, { recursive: true });
}
async function cacheAsset(url) {
  const urlWithoutQuery = url.split("?")[0];
  const assetId = import_crypto.default.createHash("sha256").update(urlWithoutQuery).digest("hex");
  let ext = ".png";
  const match = urlWithoutQuery.match(/\.(png|jpe?g|gif|svg|webp)/i);
  if (match) {
    ext = match[0].toLowerCase();
  }
  const filename = `${assetId}${ext}`;
  const filepath = path.join(ASSETS_DIR, filename);
  if (fs.existsSync(filepath)) {
    return filename;
  }
  console.log(`Downloading new asset to cache: ${filename}`);
  const response = await fetch(url);
  if (!response.ok) {
    throw new Error(`Failed to download asset: ${response.statusText}`);
  }
  const buffer = await response.arrayBuffer();
  fs.writeFileSync(filepath, Buffer.from(buffer));
  return filename;
}
function getAssetPath(filename) {
  return path.join(ASSETS_DIR, filename);
}

// src/edge/router.ts
var fs2 = __toESM(require("fs"));
var app = new import_hono.Hono();
var token = process.env.NOTION_TOKEN || "dummy_token";
var client = new NotionClient({ auth: token });
async function processAssetsInAST(nodes) {
  for (const node of nodes) {
    if ((node.type === "image" || node.type === "video" || node.type === "file") && node.url) {
      if (node.url.startsWith("http")) {
        try {
          const filename = await cacheAsset(node.url);
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
app.get("/health", (c) => c.text("OK"));
app.get("/assets/:id", async (c) => {
  const filename = c.req.param("id");
  const filepath = getAssetPath(filename);
  if (fs2.existsSync(filepath)) {
    const buffer = fs2.readFileSync(filepath);
    let mime = "application/octet-stream";
    if (filename.endsWith(".png")) mime = "image/png";
    if (filename.endsWith(".jpg") || filename.endsWith(".jpeg")) mime = "image/jpeg";
    if (filename.endsWith(".gif")) mime = "image/gif";
    if (filename.endsWith(".svg")) mime = "image/svg+xml";
    if (filename.endsWith(".webp")) mime = "image/webp";
    c.header("Content-Type", mime);
    c.header("Cache-Control", "public, max-age=31536000, immutable");
    return c.body(buffer);
  }
  return c.text("Asset not found", 404);
});
app.get("/page/:id", async (c) => {
  const pageId = c.req.param("id");
  const cachedMarkdown = getFromCache(pageId);
  if (cachedMarkdown) {
    c.header("X-Cache", "HIT");
    return c.text(cachedMarkdown);
  }
  c.header("X-Cache", "MISS");
  try {
    const response = await client.blocks.children.list({ block_id: pageId });
    const ast = parseNotionBlocks(response.results);
    await processAssetsInAST(ast);
    const markdown = astToMarkdown(ast);
    setToCache(pageId, markdown);
    return c.text(markdown);
  } catch (error) {
    console.error("Error fetching page:", error.message);
    return c.text("Failed to fetch or parse page.", 500);
  }
});
app.get("/database/:id", async (c) => {
  const dbId = c.req.param("id");
  const cacheKey = `db_${dbId}`;
  const cachedDb = getFromCache(cacheKey);
  if (cachedDb) {
    c.header("X-Cache", "HIT");
    c.header("Content-Type", "application/json");
    return c.body(cachedDb);
  }
  c.header("X-Cache", "MISS");
  try {
    const entries = await fetchDatabaseEntries(client, dbId);
    const jsonStr = JSON.stringify(entries);
    setToCache(cacheKey, jsonStr);
    c.header("Content-Type", "application/json");
    return c.body(jsonStr);
  } catch (error) {
    console.error("Error fetching database:", error.message);
    return c.text("Failed to fetch database.", 500);
  }
});
app.post("/webhook/notion", async (c) => {
  const secret = process.env.NOTION_WEBHOOK_SECRET;
  const signature = c.req.header("x-notion-signature");
  const rawBody = await c.req.text();
  if (secret && signature) {
    const hmac = crypto2.createHmac("sha256", secret);
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
    let idToInvalidate = null;
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
  } catch (err) {
    console.error("Webhook processing error:", err.message);
    return c.text("Bad request", 400);
  }
});
// Annotate the CommonJS export names for ESM import in node:
0 && (module.exports = {
  NotionClient,
  NotionRenderer,
  astToMarkdown,
  edgeRouter,
  fetchDatabaseEntries,
  fetchNotionPage,
  invalidateCache,
  markdownToAst,
  parseNotionBlocks
});
//# sourceMappingURL=index.js.map