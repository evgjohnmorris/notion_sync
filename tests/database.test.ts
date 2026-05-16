import { app, client } from '../src/edge/router';

async function runTests() {
  console.log("Running Database Sync Tests...");

  // Mock NotionClient database query
  const underlyingClient = (client as any).client;
  const originalQuery = underlyingClient.databases.query;
  underlyingClient.databases.query = async (args: any) => {
    return {
      object: 'list',
      results: [
        {
          object: 'page',
          id: 'page-123',
          url: 'https://notion.so/page-123',
          created_time: '2023-01-01T00:00:00Z',
          last_edited_time: '2023-01-02T00:00:00Z',
          properties: {
            'Name': { type: 'title', title: [{ plain_text: 'Test Page' }] },
            'Tags': { type: 'multi_select', multi_select: [{ name: 'TagA' }, { name: 'TagB' }] },
            'Status': { type: 'select', select: { name: 'Done' } },
            'Date': { type: 'date', date: { start: '2023-01-01' } },
          }
        }
      ],
      next_cursor: null,
      has_more: false,
    } as any;
  };

  try {
    // Test: Database route in Hono router
    console.log("Testing GET /database/:id ...");
    const req = new Request(`http://localhost/database/db-123`);
    const res = await app.request(req);
    
    if (res.status !== 200) {
      throw new Error(`Failed to fetch database from router, got status ${res.status}`);
    }
    
    const json = await res.json();
    
    if (!Array.isArray(json) || json.length !== 1) {
      throw new Error("Expected array of length 1");
    }

    const entry = json[0];
    if (entry.id !== 'page-123') throw new Error("Incorrect ID");
    if (entry.properties['Name'] !== 'Test Page') throw new Error("Incorrect title normalization");
    if (entry.properties['Tags'][0] !== 'TagA') throw new Error("Incorrect tags normalization");
    if (entry.properties['Status'] !== 'Done') throw new Error("Incorrect status normalization");
    if (entry.properties['Date'] !== '2023-01-01') throw new Error("Incorrect date normalization");

    console.log(`✅ GET /database/:id works! Normalized data:`);
    console.log(JSON.stringify(entry, null, 2));
    console.log("✅ All Database Sync tests passed!");

  } finally {
    // Restore
    const underlyingClient = (client as any).client;
    underlyingClient.databases.query = originalQuery;
  }
}

runTests().catch(err => {
  console.error(err);
  process.exit(1);
});
