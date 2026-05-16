import React from 'react';
import * as ReactDOMServer from 'react-dom/server';
import { NotionRenderer } from '../src/adapters/react';
import { ASTNode } from '../src/core/ast';

const mockAST: ASTNode[] = [
  {
    type: 'heading_1',
    content: [{ text: 'Hello React' }]
  },
  {
    type: 'paragraph',
    content: [
      { text: 'This is a ' },
      { text: 'bold', annotations: { bold: true } },
      { text: ' word.' }
    ]
  },
  {
    type: 'bulleted_list_item',
    content: [{ text: 'Item 1' }]
  },
  {
    type: 'bulleted_list_item',
    content: [{ text: 'Item 2' }]
  }
];

async function runTests() {
  console.log("Running React Adapter Tests...");
  
  const element = React.createElement(NotionRenderer, { nodes: mockAST });
  const html = ReactDOMServer.renderToString(element);
  
  console.log("Rendered HTML:");
  console.log(html);

  if (!html.includes('<h1') || !html.includes('Hello React</h1>')) {
    throw new Error('H1 not rendered correctly');
  }

  if (!html.includes('<strong>bold</strong>')) {
    throw new Error('Bold text not rendered correctly');
  }

  if (!html.includes('<ul') || !html.includes('<li>Item 1</li>') || !html.includes('<li>Item 2</li>')) {
    throw new Error('List not rendered correctly');
  }

  console.log("✅ React Adapter tests passed!");
}

runTests().catch(err => {
  console.error(err);
  throw err;
});
