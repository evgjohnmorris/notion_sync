#!/usr/bin/env node
var __getOwnPropNames = Object.getOwnPropertyNames;
var __esm = (fn, res) => function __init() {
  return fn && (res = (0, fn[__getOwnPropNames(fn)[0]])(fn = 0)), res;
};
var __commonJS = (cb, mod) => function __require() {
  return mod || (0, cb[__getOwnPropNames(cb)[0]])((mod = { exports: {} }).exports, mod), mod.exports;
};

// src/core/queue.ts
var RequestQueue;
var init_queue = __esm({
  "src/core/queue.ts"() {
    "use strict";
    RequestQueue = class {
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
  }
});

// src/core/client.ts
import { Client } from "@notionhq/client";
var NotionClient;
var init_client = __esm({
  "src/core/client.ts"() {
    "use strict";
    init_queue();
    NotionClient = class {
      client;
      queue;
      constructor(options) {
        this.client = new Client({ auth: options.auth });
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
  }
});

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
async function fetchDatabaseEntries(client, databaseId) {
  const entries = [];
  let hasMore = true;
  let nextCursor = void 0;
  while (hasMore) {
    const response = await client.dataSources.query({
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
var init_database = __esm({
  "src/core/database.ts"() {
    "use strict";
  }
});

// src/cli.ts
import { Command } from "commander";
import * as fs from "fs";
import * as path from "path";
var require_cli = __commonJS({
  "src/cli.ts"() {
    init_client();
    init_database();
    var program = new Command();
    program.name("notion-sync").description("CLI to sync Notion data to local files").version("1.0.0");
    program.command("export").description("Export a Notion database to local JSON").requiredOption("-d, --database <id>", "Notion database ID").requiredOption("-o, --output <dir>", "Output directory").option("-t, --token <token>", "Notion API token (or use NOTION_TOKEN env var)").action(async (options) => {
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
        console.log(`\u2705 Exported ${entries.length} entries to ${filePath}`);
      } catch (err) {
        console.error(`Export failed: ${err.message}`);
        process.exit(1);
      }
    });
    program.parse(process.argv);
  }
});
export default require_cli();
//# sourceMappingURL=cli.mjs.map