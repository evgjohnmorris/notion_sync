/**
 * Generated Tool: databasesTool_0779
 * Domain: Databases
 * ID: 0779
 */
exports.databasesTool_0779 = async (notionClient, params = {}) => {
  try {
    const response = await notionClient.databases.query(params);
    return response;
  } catch (error) {
    console.error('Error in databasesTool_0779:', error);
    throw error;
  }
};
