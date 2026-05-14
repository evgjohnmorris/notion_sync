const { listUsers } = require("./utils/notion_api");

async function testConnection() {
  console.log("Testing connection to Notion...");
  try {
    const users = await listUsers();
    console.log("Success! Successfully connected to Notion.");
    console.log(`Found ${users.length} users in your workspace.`);
    console.log("User list:");
    users.forEach(user => {
      console.log(`- ${user.name || 'Anonymous'} (${user.type})`);
    });
  } catch (error) {
    console.log("\n--- Connection Failed ---");
    console.log("Reason:", error.message);
    console.log("\nMake sure you have:");
    console.log("1. Created an Internal Integration in Notion.");
    console.log("2. Copied the Internal Integration Token into a .env file.");
    console.log("3. Shared at least one page or database with your integration.");
  }
}

testConnection();
