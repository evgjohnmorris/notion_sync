import { app } from '../src/edge/router';
import { cacheAsset } from '../src/edge/assets';
import * as fs from 'fs';
import * as path from 'path';

const ASSETS_DIR = path.join(process.cwd(), '.assets');

async function runTests() {
  console.log("Running Asset Proxy Tests...");

  // Mock global fetch for downloading asset
  const originalFetch = global.fetch;
  global.fetch = async (url: RequestInfo | URL, init?: RequestInit) => {
    if (url.toString() === 'https://example.com/mock-image.png') {
      return {
        ok: true,
        arrayBuffer: async () => Buffer.from('mock-image-data', 'utf-8'),
      } as Response;
    }
    return originalFetch(url, init);
  };

  try {
    // Test 1: cacheAsset function
    console.log("Testing cacheAsset...");
    const filename = await cacheAsset('https://example.com/mock-image.png');
    
    if (!fs.existsSync(path.join(ASSETS_DIR, filename))) {
      throw new Error("Asset was not cached to the file system");
    }
    
    const fileContent = fs.readFileSync(path.join(ASSETS_DIR, filename), 'utf-8');
    if (fileContent !== 'mock-image-data') {
      throw new Error("Asset content is incorrect");
    }
    console.log(`✅ cacheAsset works! Cached as ${filename}`);

    // Test 2: Asset route in Hono router
    console.log("Testing GET /assets/:id ...");
    const req = new Request(`http://localhost/assets/${filename}`);
    const res = await app.request(req);
    
    if (res.status !== 200) {
      throw new Error(`Failed to fetch asset from router, got status ${res.status}`);
    }
    
    const contentType = res.headers.get('content-type');
    if (contentType !== 'image/png') {
      throw new Error(`Incorrect content type: ${contentType}`);
    }

    const resText = await res.text();
    if (resText !== 'mock-image-data') {
      throw new Error("Asset content from router is incorrect");
    }

    console.log(`✅ GET /assets/:id works!`);
    console.log("✅ All Asset Proxy tests passed!");

  } finally {
    // Restore fetch
    global.fetch = originalFetch;
  }
}

runTests().catch(err => {
  console.error(err);
  process.exit(1);
});
