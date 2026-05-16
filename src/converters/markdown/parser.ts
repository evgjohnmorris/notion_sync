import { marked, Token, Tokens } from "marked";
import { ASTNode, RichTextItem, ASTNodeType } from "../../core/ast";

export function markdownToAst(markdown: string): ASTNode[] {
  const tokens = marked.lexer(markdown);
  return tokensToAst(tokens);
}

function tokensToAst(tokens: Token[]): ASTNode[] {
  const nodes: ASTNode[] = [];

  for (const token of tokens) {
    const parsed = tokenToAstNode(token);
    if (Array.isArray(parsed)) {
      nodes.push(...parsed);
    } else if (parsed) {
      nodes.push(parsed);
    }
  }

  return nodes;
}

function tokenToAstNode(token: Token): ASTNode | ASTNode[] | null {
  switch (token.type) {
    case "heading": {
      const t = token as Tokens.Heading;
      let type: ASTNodeType = "heading_1";
      if (t.depth === 2) type = "heading_2";
      if (t.depth >= 3) type = "heading_3";
      
      return {
        type,
        richText: parseInlineText(t.text)
      };
    }
    case "paragraph": {
      const t = token as Tokens.Paragraph;
      return {
        type: "paragraph",
        richText: parseInlineText(t.text)
      };
    }
    case "list": {
      const t = token as Tokens.List;
      const listNodes: ASTNode[] = [];
      const itemType: ASTNodeType = t.ordered ? "numbered_list_item" : "bulleted_list_item";
      
      for (const item of t.items) {
        listNodes.push({
          type: itemType,
          richText: parseInlineText(item.text)
        });
      }
      return listNodes;
    }
    case "code": {
      const t = token as Tokens.Code;
      return {
        type: "code",
        codeLanguage: t.lang || "plain text",
        richText: [{ type: "text", text: t.text, annotations: defaultAnnotations() }]
      };
    }
    case "blockquote": {
      const t = token as Tokens.Blockquote;
      return {
        type: "quote",
        richText: parseInlineText(t.text)
      };
    }
    case "hr": {
      return { type: "divider" };
    }
  }

  return null;
}

function defaultAnnotations() {
  return {
    bold: false,
    italic: false,
    strikethrough: false,
    underline: false,
    code: false,
    color: "default"
  };
}

// A naive inline text parser for bold/italic/code within rich text.
// A real implementation would use marked.lexer for inline tokens, but `marked` inline lexer is part of token.tokens.
function parseInlineText(text: string): RichTextItem[] {
  // To implement this accurately, we should parse inline tokens.
  // We'll use marked.lexer for inline if possible, or just return plaintext.
  try {
    const inlineTokens = marked.Lexer.lexInline(text);
    return inlineTokens.map(t => {
      const annotations = defaultAnnotations();
      let content = t.raw;
      let link: string | undefined = undefined;

      if (t.type === "strong") annotations.bold = true;
      if (t.type === "em") annotations.italic = true;
      if (t.type === "del") annotations.strikethrough = true;
      if (t.type === "codespan") annotations.code = true;
      
      if (t.type === "link") {
        const linkToken = t as Tokens.Link;
        link = linkToken.href;
        content = linkToken.text;
      } else if (t.type === "strong" || t.type === "em" || t.type === "del" || t.type === "codespan") {
        content = (t as any).text || t.raw;
      }

      return {
        type: "text",
        text: content,
        annotations,
        link
      };
    });
  } catch (e) {
    return [{
      type: "text",
      text,
      annotations: defaultAnnotations()
    }];
  }
}
