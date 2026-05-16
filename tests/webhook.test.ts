import { app } from '../src/edge/router';
import { setToCache, getFromCache } from '../src/edge/cache';
import * as crypto from 'crypto';

async function runTests() {
  console.log("Running Webhook Tests...");

  // Setup test environment
  process.env.NOTION_WEBHOOK_SECRET = 'test_secret';
  
  // Set initial cache
  setToCache('page-123', 'Some markdown');
  setToCache('db_db-456', 'Some JSON');
  
  try {
    // Test 1: Missing signature
    console.log("Testing Missing Signature...");
    const req1 = new Request(`http://localhost/webhook/notion`, {
      method: 'POST',
      body: JSON.stringify({ id: 'page-123' })
    });
    const res1 = await app.request(req1);
    if (res1.status !== 401) throw new Error(`Expected 401, got ${res1.status}`);

    // Test 2: Invalid signature
    console.log("Testing Invalid Signature...");
    const req2 = new Request(`http://localhost/webhook/notion`, {
      method: 'POST',
      headers: { 'x-notion-signature': 'invalid_hex' },
      body: JSON.stringify({ id: 'page-123' })
    });
    const res2 = await app.request(req2);
    if (res2.status !== 401) throw new Error(`Expected 401, got ${res2.status}`);

    // Test 3: Valid signature and valid invalidation
    console.log("Testing Valid Signature & Cache Invalidation...");
    const payload = JSON.stringify({ data: { id: 'page-123' } });
    const hmac = crypto.createHmac("sha256", 'test_secret');
    hmac.update(payload);
    const validSignature = hmac.digest("hex");
    
    const req3 = new Request(`http://localhost/webhook/notion`, {
      method: 'POST',
      headers: { 'x-notion-signature': validSignature },
      body: payload
    });
    const res3 = await app.request(req3);
    if (res3.status !== 200) throw new Error(`Expected 200, got ${res3.status}`);
    
    // Verify cache is invalidated
    if (getFromCache('page-123') !== undefined) {
      throw new Error("Cache was not invalidated for page-123");
    }
    
    // Test 4: Verify DB invalidation
    console.log("Testing Database Cache Invalidation...");
    const payloadDb = JSON.stringify({ source: { id: 'db-456' } });
    const hmacDb = crypto.createHmac("sha256", 'test_secret');
    hmacDb.update(payloadDb);
    const validSignatureDb = hmacDb.digest("hex");
    
    const req4 = new Request(`http://localhost/webhook/notion`, {
      method: 'POST',
      headers: { 'x-notion-signature': validSignatureDb },
      body: payloadDb
    });
    const res4 = await app.request(req4);
    if (res4.status !== 200) throw new Error(`Expected 200, got ${res4.status}`);

    if (getFromCache('db_db-456') !== undefined) {
      throw new Error("Cache was not invalidated for db_db-456");
    }

    console.log("✅ All Webhook Cache Invalidation tests passed!");

  } finally {
    // Cleanup
    delete process.env.NOTION_WEBHOOK_SECRET;
  }
}

runTests().catch(err => {
  console.error(err);
  process.exit(1);
});
