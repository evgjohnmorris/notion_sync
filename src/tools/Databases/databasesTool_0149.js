/**
 * Generated Tool: databasesTool_0149
 * Domain: Databases
 * ID: 0149
 */
exports.databasesTool_0149 = async (notionClient, params = {}) => {
  try {
    const response = await notionClient.databases.query(params);
    return response;
  } catch (error) {
    console.error('Error in databasesTool_0149:', error);
    throw error;
  }
};
