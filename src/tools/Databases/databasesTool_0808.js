/**
 * Generated Tool: databasesTool_0808
 * Domain: Databases
 * ID: 0808
 */
exports.databasesTool_0808 = async (notionClient, params = {}) => {
  try {
    const response = await notionClient.databases.query(params);
    return response;
  } catch (error) {
    console.error('Error in databasesTool_0808:', error);
    throw error;
  }
};
