import * as _notionhq_client from '@notionhq/client';
import { Client } from '@notionhq/client';
import React from 'react';
import * as hono_types from 'hono/types';
import { Hono } from 'hono';

interface NotionSyncOptions {
    auth: string;
}
declare class NotionClient {
    private client;
    private queue;
    constructor(options: NotionSyncOptions);
    /**
     * Helper to execute a Notion API call through the global queue.
     */
    private execute;
    get users(): {
        me: () => Promise<_notionhq_client.UserObjectResponse>;
    };
    get pages(): {
        retrieve: (args: Parameters<Client["pages"]["retrieve"]>[0]) => Promise<_notionhq_client.GetPageResponse>;
        create: (args: Parameters<Client["pages"]["create"]>[0]) => Promise<_notionhq_client.CreatePageResponse>;
        update: (args: Parameters<Client["pages"]["update"]>[0]) => Promise<_notionhq_client.UpdatePageResponse>;
    };
    get databases(): {
        retrieve: (args: Parameters<Client["databases"]["retrieve"]>[0]) => Promise<_notionhq_client.GetDatabaseResponse>;
        create: (args: Parameters<Client["databases"]["create"]>[0]) => Promise<_notionhq_client.CreateDatabaseResponse>;
        update: (args: Parameters<Client["databases"]["update"]>[0]) => Promise<_notionhq_client.UpdateDatabaseResponse>;
    };
    get dataSources(): {
        retrieve: (args: Parameters<Client["dataSources"]["retrieve"]>[0]) => Promise<_notionhq_client.GetDataSourceResponse>;
        query: (args: Parameters<Client["dataSources"]["query"]>[0]) => Promise<_notionhq_client.QueryDataSourceResponse>;
    };
    get blocks(): {
        retrieve: (args: Parameters<Client["blocks"]["retrieve"]>[0]) => Promise<_notionhq_client.GetBlockResponse>;
        update: (args: Parameters<Client["blocks"]["update"]>[0]) => Promise<_notionhq_client.UpdateBlockResponse>;
        delete: (args: Parameters<Client["blocks"]["delete"]>[0]) => Promise<_notionhq_client.DeleteBlockResponse>;
        children: {
            append: (args: Parameters<Client["blocks"]["children"]["append"]>[0]) => Promise<_notionhq_client.AppendBlockChildrenResponse>;
            list: (args: Parameters<Client["blocks"]["children"]["list"]>[0]) => Promise<_notionhq_client.ListBlockChildrenResponse>;
        };
    };
    get search(): (args: Parameters<Client["search"]>[0]) => Promise<_notionhq_client.SearchResponse>;
}

interface DatabaseEntry {
    id: string;
    url: string;
    createdAt: string;
    updatedAt: string;
    properties: Record<string, any>;
}
/**
 * Fetches entries from a Notion Database and normalizes them
 */
declare function fetchDatabaseEntries(client: NotionClient, databaseId: string): Promise<DatabaseEntry[]>;

/**
 * Universal Abstract Syntax Tree (AST) for Notion Sync.
 *
 * Provides an intermediary format between Notion's block format and standard Markdown/HTML formats.
 * This simplifies translation and bi-directional syncing.
 */
type ASTNodeType = "heading_1" | "heading_2" | "heading_3" | "paragraph" | "bulleted_list_item" | "numbered_list_item" | "to_do" | "toggle" | "code" | "quote" | "callout" | "divider" | "image" | "video" | "file" | "bookmark" | "table" | "table_row";
interface RichTextItem {
    type: "text" | "mention" | "equation";
    text: string;
    annotations: {
        bold: boolean;
        italic: boolean;
        strikethrough: boolean;
        underline: boolean;
        code: boolean;
        color: string;
    };
    link?: string;
}
interface ASTNode {
    id?: string;
    type: ASTNodeType;
    richText?: RichTextItem[];
    children?: ASTNode[];
    codeLanguage?: string;
    url?: string;
    checked?: boolean;
    color?: string;
}
/**
 * Transforms an array of Notion blocks into the Universal AST format.
 */
declare function parseNotionBlocks(blocks: any[]): ASTNode[];

interface NotionRendererProps {
    nodes: ASTNode[];
    components?: {
        [key: string]: React.ComponentType<{
            node: ASTNode;
            children?: React.ReactNode;
        }>;
    };
}
declare const NotionRenderer: React.FC<NotionRendererProps>;

interface FetchOptions extends RequestInit {
    next?: {
        revalidate?: number;
        tags?: string[];
    };
}
/**
 * Fetches page content from our custom Edge Router
 * @param edgeRouterUrl The base URL of the edge router (e.g., http://localhost:3000)
 * @param pageId The Notion page ID
 * @param options Next.js fetch options (useful for ISR/caching)
 */
declare function fetchNotionPage(edgeRouterUrl: string, pageId: string, options?: FetchOptions): Promise<ASTNode[]>;

declare function astToMarkdown(nodes: ASTNode[]): string;

declare function markdownToAst(markdown: string): ASTNode[];

declare const app: Hono<hono_types.BlankEnv, hono_types.BlankSchema, "/">;

declare function invalidateCache(key: string): void;

export { type ASTNode, type FetchOptions, NotionClient, NotionRenderer, type RichTextItem, astToMarkdown, app as edgeRouter, fetchDatabaseEntries, fetchNotionPage, invalidateCache, markdownToAst, parseNotionBlocks };
