/**
 * Generated Tool: databasesTool_0303
 * Domain: Databases
 * ID: 0303
 */
exports.databasesTool_0303 = async (notionClient, params = {}) => {
  try {
    const response = await notionClient.databases.query(params);
    return response;
  } catch (error) {
    console.error('Error in databasesTool_0303:', error);
    throw error;
  }
};
