/**
 * Generated Tool: databasesTool_0088
 * Domain: Databases
 * ID: 0088
 */
exports.databasesTool_0088 = async (notionClient, params = {}) => {
  try {
    const response = await notionClient.databases.query(params);
    return response;
  } catch (error) {
    console.error('Error in databasesTool_0088:', error);
    throw error;
  }
};
