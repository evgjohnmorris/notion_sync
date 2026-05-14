/**
 * Generated Tool: databasesTool_0522
 * Domain: Databases
 * ID: 0522
 */
exports.databasesTool_0522 = async (notionClient, params = {}) => {
  try {
    const response = await notionClient.databases.query(params);
    return response;
  } catch (error) {
    console.error('Error in databasesTool_0522:', error);
    throw error;
  }
};
