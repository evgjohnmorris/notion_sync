/**
 * Generated Tool: databasesTool_0752
 * Domain: Databases
 * ID: 0752
 */
exports.databasesTool_0752 = async (notionClient, params = {}) => {
  try {
    const response = await notionClient.databases.query(params);
    return response;
  } catch (error) {
    console.error('Error in databasesTool_0752:', error);
    throw error;
  }
};
