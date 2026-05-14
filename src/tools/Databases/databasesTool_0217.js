/**
 * Generated Tool: databasesTool_0217
 * Domain: Databases
 * ID: 0217
 */
exports.databasesTool_0217 = async (notionClient, params = {}) => {
  try {
    const response = await notionClient.databases.query(params);
    return response;
  } catch (error) {
    console.error('Error in databasesTool_0217:', error);
    throw error;
  }
};
