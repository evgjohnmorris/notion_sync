/**
 * Generated Tool: databasesTool_0604
 * Domain: Databases
 * ID: 0604
 */
exports.databasesTool_0604 = async (notionClient, params = {}) => {
  try {
    const response = await notionClient.databases.query(params);
    return response;
  } catch (error) {
    console.error('Error in databasesTool_0604:', error);
    throw error;
  }
};
