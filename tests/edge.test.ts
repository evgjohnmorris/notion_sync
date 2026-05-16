import { app, client } from "../src/edge/router";

const MOCK_BLOCKS = [
  {
    object: "block",
    id: "block-1",
    type: "heading_1",
    heading_1: {
      rich_text: [{ type: "text", plain_text: "Cached Page", annotations: {} }]
    }
  },
  {
    object: "block",
    id: "block-2",
    type: "paragraph",
    paragraph: {
      rich_text: [{ type: "text", plain_text: "This content is from Notion.", annotations: {} }]
    }
  }
];

// Mock the client method
Object.defineProperty(client, "blocks", {
  get: () => ({
    children: {
      list: async () => {
        // Simulate network delay
        await new Promise(resolve => setTimeout(resolve, 500));
        return { results: MOCK_BLOCKS };
      }
    }
  })
});

async function runTests() {
  console.log("Testing Notion Edge Router...");

  const pageId = "12345";

  // --- Request 1 (Cache Miss) ---
  console.log(`\n1. Fetching page ${pageId} (Expected Cache MISS)`);
  const start1 = Date.now();
  const res1 = await app.request(`/page/${pageId}`);
  const end1 = Date.now();
  const duration1 = end1 - start1;
  const cacheStatus1 = res1.headers.get("X-Cache");
  const text1 = await res1.text();

  console.log(`Status: ${res1.status}`);
  console.log(`X-Cache: ${cacheStatus1}`);
  console.log(`Duration: ${duration1}ms`);

  if (cacheStatus1 !== "MISS") throw new Error("❌ Expected Cache MISS on first request");
  if (!text1.includes("# Cached Page")) throw new Error("❌ Response missing expected content");

  // --- Request 2 (Cache Hit) ---
  console.log(`\n2. Fetching page ${pageId} again (Expected Cache HIT)`);
  const start2 = Date.now();
  const res2 = await app.request(`/page/${pageId}`);
  const end2 = Date.now();
  const duration2 = end2 - start2;
  const cacheStatus2 = res2.headers.get("X-Cache");
  const text2 = await res2.text();

  console.log(`Status: ${res2.status}`);
  console.log(`X-Cache: ${cacheStatus2}`);
  console.log(`Duration: ${duration2}ms`);

  if (cacheStatus2 !== "HIT") throw new Error("❌ Expected Cache HIT on second request");
  if (!text2.includes("# Cached Page")) throw new Error("❌ Response missing expected content");
  
  if (duration2 >= duration1) {
    console.warn("⚠️ Warning: Cache HIT took longer than Cache MISS. (This can happen locally but is rare).");
  }

  console.log(`\n✅ Caching proxy verified! (Speedup: ~${Math.round(duration1 / (duration2 || 1))}x)`);
}

runTests().catch(err => {
  console.error(err);
  throw err;
});
