/**
 * Generated Tool: databasesTool_0824
 * Domain: Databases
 * ID: 0824
 */
exports.databasesTool_0824 = async (notionClient, params = {}) => {
  try {
    const response = await notionClient.databases.query(params);
    return response;
  } catch (error) {
    console.error('Error in databasesTool_0824:', error);
    throw error;
  }
};
