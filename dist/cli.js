#!/usr/bin/env node
"use strict";
var __create = Object.create;
var __defProp = Object.defineProperty;
var __getOwnPropDesc = Object.getOwnPropertyDescriptor;
var __getOwnPropNames = Object.getOwnPropertyNames;
var __getProtoOf = Object.getPrototypeOf;
var __hasOwnProp = Object.prototype.hasOwnProperty;
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

// src/cli.ts
var import_commander = require("commander");
var fs = __toESM(require("fs"));
var path = __toESM(require("path"));

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

// src/cli.ts
var program = new import_commander.Command();
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
//# sourceMappingURL=cli.js.map