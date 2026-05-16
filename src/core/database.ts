import { NotionClient } from "./client";

export interface DatabaseEntry {
  id: string;
  url: string;
  createdAt: string;
  updatedAt: string;
  properties: Record<string, any>;
}

/**
 * Normalizes a Notion Database Page Property into a simple JSON value
 */
function normalizeProperty(prop: any): any {
  switch (prop.type) {
    case 'title':
      return prop.title.map((t: any) => t.plain_text).join('');
    case 'rich_text':
      return prop.rich_text.map((t: any) => t.plain_text).join('');
    case 'number':
      return prop.number;
    case 'select':
      return prop.select?.name || null;
    case 'multi_select':
      return prop.multi_select.map((s: any) => s.name);
    case 'date':
      return prop.date?.start || null;
    case 'checkbox':
      return prop.checkbox;
    case 'url':
      return prop.url;
    case 'email':
      return prop.email;
    case 'phone_number':
      return prop.phone_number;
    case 'formula':
      return prop.formula[prop.formula.type];
    case 'relation':
      return prop.relation.map((r: any) => r.id);
    case 'rollup':
      return prop.rollup[prop.rollup.type];
    default:
      return null;
  }
}

/**
 * Fetches entries from a Notion Database and normalizes them
 */
export async function fetchDatabaseEntries(client: NotionClient, databaseId: string): Promise<DatabaseEntry[]> {
  const entries: DatabaseEntry[] = [];
  let hasMore = true;
  let nextCursor: string | undefined = undefined;

  while (hasMore) {
    const response = await client.dataSources.query({
      data_source_id: databaseId,
      start_cursor: nextCursor,
    });

    for (const page of response.results as any[]) {
      const properties: Record<string, any> = {};
      
      // Normalize properties
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
    nextCursor = response.next_cursor || undefined;
  }

  return entries;
}
