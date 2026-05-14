/**
 * Generated Tool: databasesTool_0308
 * Domain: Databases
 * ID: 0308
 */
exports.databasesTool_0308 = async (notionClient, params = {}) => {
  try {
    const response = await notionClient.databases.query(params);
    return response;
  } catch (error) {
    console.error('Error in databasesTool_0308:', error);
    throw error;
  }
};
