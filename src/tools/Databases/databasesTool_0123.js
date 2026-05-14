/**
 * Generated Tool: databasesTool_0123
 * Domain: Databases
 * ID: 0123
 */
exports.databasesTool_0123 = async (notionClient, params = {}) => {
  try {
    const response = await notionClient.databases.query(params);
    return response;
  } catch (error) {
    console.error('Error in databasesTool_0123:', error);
    throw error;
  }
};
