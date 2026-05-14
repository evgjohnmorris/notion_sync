/**
 * Generated Tool: databasesTool_0163
 * Domain: Databases
 * ID: 0163
 */
exports.databasesTool_0163 = async (notionClient, params = {}) => {
  try {
    const response = await notionClient.databases.query(params);
    return response;
  } catch (error) {
    console.error('Error in databasesTool_0163:', error);
    throw error;
  }
};
