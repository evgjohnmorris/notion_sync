/**
 * Generated Tool: databasesTool_0237
 * Domain: Databases
 * ID: 0237
 */
exports.databasesTool_0237 = async (notionClient, params = {}) => {
  try {
    const response = await notionClient.databases.query(params);
    return response;
  } catch (error) {
    console.error('Error in databasesTool_0237:', error);
    throw error;
  }
};
