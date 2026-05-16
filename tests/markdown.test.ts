import { markdownToAst, astToMarkdown } from "../src/converters/markdown";
import { ASTNode } from "../src/core/ast";

const sampleMarkdown = `# Hello World

This is a **bold** paragraph with some *italic* text and a [link](https://example.com).

## A Subheading

- Item 1
- Item 2
- Item 3

1. First
2. Second

> A blockquote

\`\`\`typescript
const a = 1;
console.log(a);
\`\`\`

---
`;

async function runTests() {
  console.log("Parsing Markdown to AST...");
  const ast = markdownToAst(sampleMarkdown);
  
  if (ast.length === 0) {
    throw new Error("❌ Markdown parsing failed: AST is empty.");
  }

  console.log("AST Node count:", ast.length);

  const h1 = ast[0];
  if (h1.type !== "heading_1" || h1.richText?.[0]?.text !== "Hello World") {
    throw new Error("❌ Markdown parsing failed: H1 incorrect.");
  }

  console.log("Converting AST back to Markdown...");
  const generatedMarkdown = astToMarkdown(ast);

  if (!generatedMarkdown.includes("# Hello World") || !generatedMarkdown.includes("- Item 1")) {
    throw new Error("❌ AST to Markdown generation failed.");
  }

  console.log("✅ Markdown Bi-Directional Conversion Success!");
}

runTests().catch(err => {
  console.error(err);
  throw err;
});
