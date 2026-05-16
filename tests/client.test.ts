import { NotionClient } from "../src/core/client";
import dotenv from "dotenv";

dotenv.config();

async function main() {
  const token = process.env.NOTION_TOKEN;

  if (!token) {
    console.error("NOTION_TOKEN is not defined in environment.");
    process.exit(1);
  }

  const client = new NotionClient({ auth: token });

  console.log("Testing NotionClient authentication...");
  try {
    const me = await client.users.me();
    console.log("Authentication successful! Bot info:", me);
    
    console.log("\nTesting rate limit queue by sending multiple rapid search requests...");
    const promises = [];
    for (let i = 0; i < 5; i++) {
        promises.push(
            client.search({
                query: 'test',
                page_size: 1
            }).then(res => {
                console.log(`Search request ${i+1} completed.`);
                return res;
            })
        );
    }
    
    await Promise.all(promises);
    console.log("All requests completed successfully through the queue.");

  } catch (error) {
    console.error("Test failed:", error);
  }
}

main();
