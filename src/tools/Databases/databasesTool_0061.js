/**
 * Generated Tool: databasesTool_0061
 * Domain: Databases
 * ID: 0061
 */
exports.databasesTool_0061 = async (notionClient, params = {}) => {
  try {
    const response = await notionClient.databases.query(params);
    return response;
  } catch (error) {
    console.error('Error in databasesTool_0061:', error);
    throw error;
  }
};
