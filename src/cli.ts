#!/usr/bin/env node
import { Command } from "commander";
import * as fs from "fs";
import * as path from "path";
import { NotionClient } from "./core/client";
import { fetchDatabaseEntries } from "./core/database";

const program = new Command();

program
  .name("notion-sync")
  .description("CLI to sync Notion data to local files")
  .version("1.0.0");

program
  .command("export")
  .description("Export a Notion database to local JSON")
  .requiredOption("-d, --database <id>", "Notion database ID")
  .requiredOption("-o, --output <dir>", "Output directory")
  .option("-t, --token <token>", "Notion API token (or use NOTION_TOKEN env var)")
  .action(async (options) => {
    const token = options.token || process.env.NOTION_TOKEN;
    if (!token) {
      console.error("Error: Missing Notion token. Provide via --token or NOTION_TOKEN.");
      process.exit(1);
    }

    const client = new NotionClient({ auth: token });
    
    console.log(`Fetching database ${options.database}...`);
    try {
      const entries = await fetchDatabaseEntries(client, options.database);
      
      if (!fs.existsSync(options.output)) {
        fs.mkdirSync(options.output, { recursive: true });
      }

      const filePath = path.join(options.output, `${options.database}.json`);
      fs.writeFileSync(filePath, JSON.stringify(entries, null, 2));
      
      console.log(`✅ Exported ${entries.length} entries to ${filePath}`);
    } catch (err: any) {
      console.error(`Export failed: ${err.message}`);
      process.exit(1);
    }
  });

program.parse(process.argv);
