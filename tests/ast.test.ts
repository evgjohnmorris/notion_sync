import { parseNotionBlocks, buildNotionBlocks } from "../src/core/ast";

const sampleNotionBlocks = [
  {
    object: "block",
    type: "heading_1",
    heading_1: {
      rich_text: [
        {
          type: "text",
          plain_text: "Test Heading",
          annotations: {
            bold: true,
            italic: false,
            strikethrough: false,
            underline: false,
            code: false,
            color: "default"
          }
        }
      ]
    }
  },
  {
    object: "block",
    type: "paragraph",
    paragraph: {
      rich_text: [
        {
          type: "text",
          plain_text: "This is a paragraph.",
          annotations: {
            bold: false,
            italic: false,
            strikethrough: false,
            underline: false,
            code: false,
            color: "default"
          }
        }
      ]
    }
  }
];

function testAST() {
  console.log("Testing Notion Blocks to AST...");
  const ast = parseNotionBlocks(sampleNotionBlocks);
  console.log("Parsed AST:", JSON.stringify(ast, null, 2));

  console.log("\nTesting AST back to Notion Blocks...");
  const builtBlocks = buildNotionBlocks(ast);
  console.log("Rebuilt Blocks:", JSON.stringify(builtBlocks, null, 2));

  if (builtBlocks[0].heading_1.rich_text[0].text.content === "Test Heading") {
    console.log("\n✅ AST Parsing & Building Success!");
  } else {
    throw new Error("\n❌ AST Processing Failed!");
  }
}

testAST();
