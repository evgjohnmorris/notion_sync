/**
 * Generated Tool: databasesTool_0837
 * Domain: Databases
 * ID: 0837
 */
exports.databasesTool_0837 = async (notionClient, params = {}) => {
  try {
    const response = await notionClient.databases.query(params);
    return response;
  } catch (error) {
    console.error('Error in databasesTool_0837:', error);
    throw error;
  }
};
