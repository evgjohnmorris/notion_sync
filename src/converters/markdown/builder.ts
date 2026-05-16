import { ASTNode, RichTextItem } from "../../core/ast";

export function astToMarkdown(nodes: ASTNode[]): string {
  let markdown = "";

  for (const node of nodes) {
    markdown += nodeToMarkdown(node) + "\n\n";
  }

  return markdown.trim();
}

function nodeToMarkdown(node: ASTNode, indentLevel: number = 0): string {
  const indent = "  ".repeat(indentLevel);
  let content = "";

  if (node.richText) {
    content = richTextToMarkdown(node.richText);
  }

  let result = "";

  switch (node.type) {
    case "heading_1":
      result = `${indent}# ${content}`;
      break;
    case "heading_2":
      result = `${indent}## ${content}`;
      break;
    case "heading_3":
      result = `${indent}### ${content}`;
      break;
    case "paragraph":
      result = `${indent}${content}`;
      break;
    case "bulleted_list_item":
      result = `${indent}- ${content}`;
      break;
    case "numbered_list_item":
      result = `${indent}1. ${content}`;
      break;
    case "to_do":
      result = `${indent}- [${node.checked ? "x" : " "}] ${content}`;
      break;
    case "toggle":
      result = `${indent}<details><summary>${content}</summary>`;
      break;
    case "quote":
      result = `${indent}> ${content}`;
      break;
    case "code":
      result = `${indent}\`\`\`${node.codeLanguage || ""}\n${indent}${content}\n${indent}\`\`\``;
      break;
    case "divider":
      result = `${indent}---`;
      break;
    case "image":
    case "video":
    case "file":
    case "bookmark":
      result = `${indent}[${content || node.url}](${node.url})`;
      break;
    case "callout":
      result = `${indent}> 💡 ${content}`;
      break;
    // For tables and other complex blocks, a simple rendering is provided here.
    default:
      result = `${indent}${content}`;
      break;
  }

  if (node.children && node.children.length > 0) {
    const childrenMd = node.children.map(child => nodeToMarkdown(child, indentLevel + 1)).join("\n");
    if (node.type === "toggle") {
      result += `\n${childrenMd}\n${indent}</details>`;
    } else {
      result += `\n${childrenMd}`;
    }
  } else if (node.type === "toggle") {
    result += `</details>`;
  }

  return result;
}

function richTextToMarkdown(richText: RichTextItem[]): string {
  return richText.map(rt => {
    let text = rt.text;

    if (rt.annotations) {
      if (rt.annotations.bold) text = `**${text}**`;
      if (rt.annotations.italic) text = `*${text}*`;
      if (rt.annotations.strikethrough) text = `~~${text}~~`;
      if (rt.annotations.code) text = `\`${text}\``;
      // Note: Underline and color don't have standard markdown equivalents, so we ignore them or use HTML tags
    }

    if (rt.link) {
      text = `[${text}](${rt.link})`;
    }

    return text;
  }).join("");
}
