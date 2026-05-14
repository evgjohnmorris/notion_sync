/**
 * Generated Tool: databasesTool_0894
 * Domain: Databases
 * ID: 0894
 */
exports.databasesTool_0894 = async (notionClient, params = {}) => {
  try {
    const response = await notionClient.databases.query(params);
    return response;
  } catch (error) {
    console.error('Error in databasesTool_0894:', error);
    throw error;
  }
};
