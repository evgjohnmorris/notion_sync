/**
 * Generated Tool: databasesTool_0196
 * Domain: Databases
 * ID: 0196
 */
exports.databasesTool_0196 = async (notionClient, params = {}) => {
  try {
    const response = await notionClient.databases.query(params);
    return response;
  } catch (error) {
    console.error('Error in databasesTool_0196:', error);
    throw error;
  }
};
