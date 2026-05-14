/**
 * Generated Tool: databasesTool_0327
 * Domain: Databases
 * ID: 0327
 */
exports.databasesTool_0327 = async (notionClient, params = {}) => {
  try {
    const response = await notionClient.databases.query(params);
    return response;
  } catch (error) {
    console.error('Error in databasesTool_0327:', error);
    throw error;
  }
};
