import { ASTNode } from '../../core/ast';
import { markdownToAst } from '../../converters/markdown';

export interface FetchOptions extends RequestInit {
  // Next.js specific fetch options
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
export async function fetchNotionPage(
  edgeRouterUrl: string,
  pageId: string,
  options?: FetchOptions
): Promise<ASTNode[]> {
  const response = await fetch(`${edgeRouterUrl.replace(/\/$/, '')}/page/${pageId}`, {
    ...options,
    headers: {
      'Accept': 'application/json',
      ...options?.headers,
    }
  });

  if (!response.ok) {
    throw new Error(`Failed to fetch Notion page from Edge Router: ${response.statusText}`);
  }

  // The edge router returns Markdown strings, so we parse it back to AST using our parser.
  const markdown = await response.text();
  const ast = markdownToAst(markdown);
  
  return ast;
}
