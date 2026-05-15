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

## API Reference & Tools

### Core Domains

**Blocks** (`notionSync.blocks`)
- `appendMarkdown`: Appends a Markdown string as Notion blocks.
- `retrieve`: Retrieves a block by its ID.
- `update`: Updates properties of an existing block.
- `delete`: Deletes a specific block.

**Databases** (`notionSync.databases`)
- `queryWithSQL`: Queries a database using a standard SQL `WHERE` clause string.
- `fuzzyQuery`: Queries a database by resolving its ID dynamically from a natural language name.

**Pages** (`notionSync.pages`)
- `createFuzzy`: Creates a new page by resolving the parent database ID dynamically via its name.
- `updateFuzzy`: Updates a page by resolving its ID dynamically via its name.

**Finance** (`notionSync.finance`)
- `currencyConverter`: Fetches live exchange rates and converts currency values across a database.
- `ledgerSync`: Syncs CSV data to a Notion database with duplicate prevention and optional chart generation.

**Strategy** (`notionSync.strategy`)
- `generateSWOT`: Generates a SWOT Analysis page (Strengths, Weaknesses, Opportunities, Threats) with context from Wikipedia.
- `generatePESTEL`: Generates a PESTEL Analysis page (Political, Economic, Social, Technological, Environmental, Legal).
- `generateOKR`: Generates an OKR Alignment page (Objectives and Key Results).
- `generateLeanCanvas`: Generates a Lean Canvas 1-Page Business Model.
- `generatePorterFiveForces`: Generates a Porter's Five Forces Industry Analysis page.

**Visualization** (`notionSync.visualization`)
- `generateChartBlock`: Generates external charts (via QuickChart) and returns a valid Notion Image block.

**Industry Macros** (`notionSync.industry`)
Specialized out-of-the-box workflows for specific sectors:
- Domains: `logistics`, `trade`, `import`, `export`, `brokerage`, `taxes`, `isoStandards`.
- Methods: `smartCreate` and `smartUpdate` which simulate complex, multi-step workflows for autonomous AI agents.

### AI Enhancements
- **Fuzzy Match**: Resolves natural language names to Notion UUIDs via the Search API.
- **Markdown Parser**: Parses simple Markdown into Notion Block JSON payloads.
- **SQL Parser**: Converts simple SQL `WHERE` clauses into Notion's JSON filter format.

## Testing

To verify the semantic API logic, run the automated lab tests:

```bash
npm test
```

## Community and Contributions

We love open-source contributions! Whether you want to add new industry domains, optimize the `sql-parser.js`, or implement deeper AI enhancements, please check out our [Contributing Guidelines](CONTRIBUTING.md) and submit a pull request.

## License

This project is licensed under the [MIT License](LICENSE).
