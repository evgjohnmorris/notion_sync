/**
 * Main entry point for the Notion Sync tools.
 * Exposes a semantic, enterprise-ready API leveraging AI enhancements.
 */
module.exports = {
  blocks: require('./domains/blocks'),
  databases: require('./domains/databases'),
  pages: require('./domains/pages'),
  industry: require('./domains/industry'),
  finance: require('./domains/finance')
};
