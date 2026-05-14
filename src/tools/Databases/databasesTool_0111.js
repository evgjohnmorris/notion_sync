/**
 * Generated Tool: databasesTool_0111
 * Domain: Databases
 * ID: 0111
 */
exports.databasesTool_0111 = async (notionClient, params = {}) => {
  try {
    const response = await notionClient.databases.query(params);
    return response;
  } catch (error) {
    console.error('Error in databasesTool_0111:', error);
    throw error;
  }
};
