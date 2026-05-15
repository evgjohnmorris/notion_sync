#!/usr/bin/env node

require('dotenv').config();
const fs = require('fs');
const { Command } = require('commander');
const notionSync = require('../src/index');

const program = new Command();

program
  .name('notion-sync')
  .description('Enterprise-scale Notion API integration CLI')
  .version('1.0.0');

// Helper to get real client
function getClient() {
    const token = process.env.NOTION_TOKEN;
    if (!token) {
        console.error('🚨 Error: NOTION_TOKEN environment variable is required.');
        process.exit(1);
    }
    return new notionSync.NotionSyncClient(token);
}

// Strategy Commands
const strategy = program.command('strategy').description('Strategic planning frameworks');

strategy.command('swot')
  .description('Generate a SWOT analysis')
  .requiredOption('--company <name>', 'Company name')
  .requiredOption('--db <id>', 'Notion Database ID')
  .option('--file <path>', 'Path to markdown file for custom ingestion')
  .action(async (options) => {
      try {
          console.log(`Generating SWOT analysis for ${options.company}...`);
          const client = getClient();
          const fileContent = options.file ? fs.readFileSync(options.file, 'utf-8') : undefined;
          const result = await notionSync.strategy.generateSWOT(client, options.db, options.company, fileContent);
          console.log(`✅ Generated SWOT successfully (Page ID: ${result.id})`);
      } catch (error) {
          console.error('🚨 Error generating SWOT:', error.message);
          process.exit(1);
      }
  });

strategy.command('okr')
  .description('Generate an OKR framework')
  .requiredOption('--objective <name>', 'Objective name')
  .requiredOption('--owner <name>', 'Owner name')
  .requiredOption('--db <id>', 'Notion Database ID')
  .option('--file <path>', 'Path to markdown file for custom ingestion')
  .action(async (options) => {
      try {
          console.log(`Generating OKRs for ${options.objective} (@${options.owner})...`);
          const client = getClient();
          const fileContent = options.file ? fs.readFileSync(options.file, 'utf-8') : undefined;
          const result = await notionSync.strategy.generateOKR(client, options.db, options.objective, options.owner, fileContent);
          console.log(`✅ Generated OKR successfully (Page ID: ${result.id})`);
      } catch (error) {
          console.error('🚨 Error generating OKR:', error.message);
          process.exit(1);
      }
  });

strategy.command('pestel')
  .description('Generate a PESTEL analysis')
  .requiredOption('--company <name>', 'Company name')
  .requiredOption('--db <id>', 'Notion Database ID')
  .option('--file <path>', 'Path to markdown file for custom ingestion')
  .action(async (options) => {
      try {
          console.log(`Generating PESTEL analysis for ${options.company}...`);
          const client = getClient();
          const fileContent = options.file ? fs.readFileSync(options.file, 'utf-8') : undefined;
          const result = await notionSync.strategy.generatePESTEL(client, options.db, options.company, fileContent);
          console.log(`✅ Generated PESTEL successfully (Page ID: ${result.id})`);
      } catch (error) {
          console.error('🚨 Error generating PESTEL:', error.message);
          process.exit(1);
      }
  });

strategy.command('lean-canvas')
  .description('Generate a Lean Canvas')
  .requiredOption('--product <name>', 'Product name')
  .requiredOption('--db <id>', 'Notion Database ID')
  .option('--file <path>', 'Path to markdown file for custom ingestion')
  .action(async (options) => {
      try {
          console.log(`Generating Lean Canvas for ${options.product}...`);
          const client = getClient();
          const fileContent = options.file ? fs.readFileSync(options.file, 'utf-8') : undefined;
          const result = await notionSync.strategy.generateLeanCanvas(client, options.db, options.product, fileContent);
          console.log(`✅ Generated Lean Canvas successfully (Page ID: ${result.id})`);
      } catch (error) {
          console.error('🚨 Error generating Lean Canvas:', error.message);
          process.exit(1);
      }
  });

strategy.command('porter')
  .description("Generate Porter's Five Forces analysis")
  .requiredOption('--market <name>', 'Market name')
  .requiredOption('--db <id>', 'Notion Database ID')
  .option('--file <path>', 'Path to markdown file for custom ingestion')
  .action(async (options) => {
      try {
          console.log(`Generating Porter's Five Forces for ${options.market}...`);
          const client = getClient();
          const fileContent = options.file ? fs.readFileSync(options.file, 'utf-8') : undefined;
          const result = await notionSync.strategy.generatePorterFiveForces(client, options.db, options.market, fileContent);
          console.log(`✅ Generated Porter's Five Forces successfully (Page ID: ${result.id})`);
      } catch (error) {
          console.error('🚨 Error generating Porter\'s Five Forces:', error.message);
          process.exit(1);
      }
  });

// Finance Commands
const finance = program.command('finance').description('Financial operations');

finance.command('ledger')
  .description('Sync a ledger CSV to a database')
  .requiredOption('--csv <path>', 'Path to CSV data file')
  .requiredOption('--db <id>', 'Notion Database ID')
  .option('--chart', 'Generate a visualization chart from the ledger data')
  .action(async (options) => {
      try {
          console.log(`Syncing ledger to DB ${options.db}...`);
          const client = getClient();
          const csvData = fs.readFileSync(options.csv, 'utf-8');
          const result = await notionSync.finance.ledgerSync(client, options.db, csvData, undefined, options.chart);
          console.log(`✅ Synced ledger successfully.`);
          console.log(`📊 Rows Synced: ${result.rows_synced}`);
          console.log(`⏭️ Rows Skipped (Duplicate): ${result.rows_skipped || 0}`);
          if (result.chart_url) {
              console.log(`📈 View Chart: ${result.chart_url}`);
          }
      } catch (error) {
          console.error('🚨 Error syncing ledger:', error.message);
          process.exit(1);
      }
  });

program.parse(process.argv);

