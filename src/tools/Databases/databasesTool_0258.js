/**
 * Generated Tool: databasesTool_0258
 * Domain: Databases
 * ID: 0258
 */
exports.databasesTool_0258 = async (notionClient, params = {}) => {
  try {
    const response = await notionClient.databases.query(params);
    return response;
  } catch (error) {
    console.error('Error in databasesTool_0258:', error);
    throw error;
  }
};
