/**
 * Generated Tool: databasesTool_0957
 * Domain: Databases
 * ID: 0957
 */
exports.databasesTool_0957 = async (notionClient, params = {}) => {
  try {
    const response = await notionClient.databases.query(params);
    return response;
  } catch (error) {
    console.error('Error in databasesTool_0957:', error);
    throw error;
  }
};
