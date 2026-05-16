/**
 * Universal Abstract Syntax Tree (AST) for Notion Sync.
 * 
 * Provides an intermediary format between Notion's block format and standard Markdown/HTML formats.
 * This simplifies translation and bi-directional syncing.
 */

export type ASTNodeType =
  | "heading_1"
  | "heading_2"
  | "heading_3"
  | "paragraph"
  | "bulleted_list_item"
  | "numbered_list_item"
  | "to_do"
  | "toggle"
  | "code"
  | "quote"
  | "callout"
  | "divider"
  | "image"
  | "video"
  | "file"
  | "bookmark"
  | "table"
  | "table_row";

export interface RichTextItem {
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

export interface ASTNode {
  id?: string;
  type: ASTNodeType;
  richText?: RichTextItem[];
  children?: ASTNode[];
  
  // Type-specific properties
  codeLanguage?: string;
  url?: string;
  checked?: boolean;
  color?: string;
}

/**
 * Transforms an array of Notion blocks into the Universal AST format.
 */
export function parseNotionBlocks(blocks: any[]): ASTNode[] {
  return blocks.map(block => {
    const type = block.type;
    const content = block[type];
    
    const node: ASTNode = {
      id: block.id,
      type: type as ASTNodeType,
    };

    if (content?.rich_text) {
      node.richText = content.rich_text.map((rt: any) => ({
        type: rt.type,
        text: rt.plain_text,
        annotations: rt.annotations,
        link: rt.href
      }));
    }

    if (type === 'code' && content?.language) {
      node.codeLanguage = content.language;
    }
    
    if (type === 'to_do' && content?.checked !== undefined) {
      node.checked = content.checked;
    }

    if ((type === 'image' || type === 'video' || type === 'file' || type === 'bookmark') && content) {
      node.url = content.type === 'external' ? content.external.url : content.file?.url || content.url;
    }

    if (content?.color) {
      node.color = content.color;
    }

    if (block.has_children && block.children) {
      node.children = parseNotionBlocks(block.children);
    }

    return node;
  });
}

/**
 * Transforms an AST back into Notion's Block object structure.
 */
export function buildNotionBlocks(nodes: ASTNode[]): any[] {
  return nodes.map(node => {
    const block: any = {
      object: 'block',
      type: node.type
    };

    const content: any = {};

    if (node.richText) {
      content.rich_text = node.richText.map(rt => ({
        type: 'text',
        text: {
          content: rt.text,
          link: rt.link ? { url: rt.link } : null
        },
        annotations: rt.annotations
      }));
    }

    if (node.type === 'code' && node.codeLanguage) {
      content.language = node.codeLanguage;
    }

    if (node.type === 'to_do' && node.checked !== undefined) {
      content.checked = node.checked;
    }

    if (node.url) {
      if (node.type === 'bookmark') {
        content.url = node.url;
      } else {
        content.type = 'external';
        content.external = { url: node.url };
      }
    }

    if (node.color) {
      content.color = node.color;
    }

    if (node.children && node.children.length > 0) {
      content.children = buildNotionBlocks(node.children);
    }

    block[node.type] = content;

    return block;
  });
}
