/**
 * Generated Tool: databasesTool_0261
 * Domain: Databases
 * ID: 0261
 */
exports.databasesTool_0261 = async (notionClient, params = {}) => {
  try {
    const response = await notionClient.databases.query(params);
    return response;
  } catch (error) {
    console.error('Error in databasesTool_0261:', error);
    throw error;
  }
};
