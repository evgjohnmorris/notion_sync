/**
 * Generated Tool: databasesTool_0800
 * Domain: Databases
 * ID: 0800
 */
exports.databasesTool_0800 = async (notionClient, params = {}) => {
  try {
    const response = await notionClient.databases.query(params);
    return response;
  } catch (error) {
    console.error('Error in databasesTool_0800:', error);
    throw error;
  }
};
