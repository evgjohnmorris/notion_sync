/**
 * Generated Tool: databasesTool_0058
 * Domain: Databases
 * ID: 0058
 */
exports.databasesTool_0058 = async (notionClient, params = {}) => {
  try {
    const response = await notionClient.databases.query(params);
    return response;
  } catch (error) {
    console.error('Error in databasesTool_0058:', error);
    throw error;
  }
};
