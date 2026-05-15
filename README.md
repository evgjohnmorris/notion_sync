# Enterprise Notion Sync Library & AI Toolset

![Notion](https://img.shields.io/badge/Notion-000000?style=for-the-badge&logo=notion&logoColor=white) ![NodeJS](https://img.shields.io/badge/Node.js-43853D?style=for-the-badge&logo=node.js&logoColor=white)

Welcome to the ultimate **Notion API Synchronization Library** for enterprise environments! This library provides an intuitive, domain-based semantic API wrapped around powerful AI enhancements to simplify complex Notion automation.

If you are looking for precision control over Notion with built-in AI enhancements (Fuzzy Matching, SQL-to-Notion parsers, and Industry Macros), you have come to the right place.

## Features

- **Semantic Domain API**: Clean and intuitive API structure targeting specific Notion capabilities and industry workflows.
- **AI Enhancements**: 
  - `appendMarkdown`: Automatically converts standard Markdown text into Notion's proprietary Block JSON payload.
  - `fuzzyQuery` / `createFuzzy`: Resolve target page/database IDs dynamically by name instead of static UUIDs.
  - `queryWithSQL`: Translate standard SQL `WHERE` clauses directly into Notion JSON filter payloads.
- **Industry Macros**: Specialized out-of-the-box workflows for complex logic in specific sectors (`Trade`, `Logistics`, `Import`, `Export`, `Brokerage`, `Taxes`, and `ISO_Standards`).

## Installation

Clone this repository and install dependencies:

```bash
git clone https://github.com/evgjohnmorris/notion_sync.git
cd notion_sync
npm install
```

## Quick Start

The API is separated into structured domains.

```javascript
const notionSync = require('./src/index');
const { Client } = require('@notionhq/client');

// Initialize the Notion SDK Client
const notionClient = new Client({ auth: process.env.NOTION_TOKEN });

async function run() {
    // 1. AI-enhanced SQL Database Querying
    const sqlQuery = "SELECT * FROM db WHERE Status = 'Done' OR Priority = 'High'";
    // Requires database ID and standard SQL string
    const dbResults = await notionSync.databases.queryWithSQL(notionClient, 'database-uuid', sqlQuery);
    
    // 2. Markdown-to-Blocks Appending
    // Automatically convert markdown into Notion's block schema and append it!
    const markdownText = "## Summary\n- Item 1\n- Item 2";
    await notionSync.blocks.appendMarkdown(notionClient, 'page-uuid', markdownText);

    // 3. Fuzzy Matching for Pages
    // Create a page by providing the natural language name of the parent database!
    const fuzzyResult = await notionSync.pages.createFuzzy(notionClient, 'Q3 Marketing Tracker', {
        properties: { /* Notion Properties Payload */ }
    });
    
    // 4. Industry-Specific Macros
    // Execute a multi-step macro for calculating and logging Q3 tax provisions
    const taxesResult = await notionSync.industry.taxes.smartCreate(notionClient, {
        company_id: 'Acme Corp',
        quarter: 'Q3-2026',
        revenue_estimate: 5000000
    });
    console.log(taxesResult);
}

run();
```

## Testing

To verify the semantic API logic, run the automated lab tests:

```bash
npm test
```

## Community and Contributions

We love open-source contributions! Whether you want to add new industry domains, optimize the `sql-parser.js`, or implement deeper AI enhancements, please check out our [Contributing Guidelines](CONTRIBUTING.md) and submit a pull request.

## License

This project is licensed under the [MIT License](LICENSE).
