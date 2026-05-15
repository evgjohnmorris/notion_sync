/**
 * Main entry point for the Notion Sync tools.
 * Exposes a semantic, enterprise-ready API leveraging AI enhancements.
 */
module.exports = {
  databases: require('./domains/databases'),
  pages: require('./domains/pages'),
  industry: require('./domains/industry')
};
