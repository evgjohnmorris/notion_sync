import { Client } from "@notionhq/client";
import { RequestQueue } from "./queue";

export interface NotionSyncOptions {
  auth: string;
}

export class NotionClient {
  private client: Client;
  private queue: RequestQueue;

  constructor(options: NotionSyncOptions) {
    this.client = new Client({ auth: options.auth });
    this.queue = new RequestQueue();
  }

  /**
   * Helper to execute a Notion API call through the global queue.
   */
  private execute<T>(task: () => Promise<T>): Promise<T> {
    return this.queue.add(async () => {
      try {
        return await task();
      } catch (error: any) {
        // Implement rate-limiting logic here if needed (e.g. 429 backoff globally)
        if (error.status === 429) {
          const retryAfter = error.headers?.get?.('retry-after');
          const delayMs = retryAfter ? parseInt(retryAfter) * 1000 : 1000;
          console.warn(`[NotionClient] Rate limited. Pausing queue for ${delayMs}ms...`);
          await this.queue.delay(delayMs);
          // Retry the task
          return await task();
        }
        throw error;
      }
    });
  }

  // Define essential Notion API methods mapped to the queue

  public get users() {
    return {
      me: () => this.execute(() => this.client.users.me({})),
    };
  }

  public get pages() {
    return {
      retrieve: (args: Parameters<Client['pages']['retrieve']>[0]) => this.execute(() => this.client.pages.retrieve(args)),
      create: (args: Parameters<Client['pages']['create']>[0]) => this.execute(() => this.client.pages.create(args)),
      update: (args: Parameters<Client['pages']['update']>[0]) => this.execute(() => this.client.pages.update(args)),
    };
  }

  public get databases() {
    return {
      retrieve: (args: Parameters<Client['databases']['retrieve']>[0]) => this.execute(() => this.client.databases.retrieve(args)),
      create: (args: Parameters<Client['databases']['create']>[0]) => this.execute(() => this.client.databases.create(args)),
      update: (args: Parameters<Client['databases']['update']>[0]) => this.execute(() => this.client.databases.update(args)),
    };
  }

  public get dataSources() {
    return {
      retrieve: (args: Parameters<Client['dataSources']['retrieve']>[0]) => this.execute(() => this.client.dataSources.retrieve(args)),
      query: (args: Parameters<Client['dataSources']['query']>[0]) => this.execute(() => this.client.dataSources.query(args)),
    };
  }

  public get blocks() {
    return {
      retrieve: (args: Parameters<Client['blocks']['retrieve']>[0]) => this.execute(() => this.client.blocks.retrieve(args)),
      update: (args: Parameters<Client['blocks']['update']>[0]) => this.execute(() => this.client.blocks.update(args)),
      delete: (args: Parameters<Client['blocks']['delete']>[0]) => this.execute(() => this.client.blocks.delete(args)),
      children: {
        append: (args: Parameters<Client['blocks']['children']['append']>[0]) => this.execute(() => this.client.blocks.children.append(args)),
        list: (args: Parameters<Client['blocks']['children']['list']>[0]) => this.execute(() => this.client.blocks.children.list(args)),
      }
    };
  }

  public get search() {
    return (args: Parameters<Client['search']>[0]) => this.execute(() => this.client.search(args));
  }
}
