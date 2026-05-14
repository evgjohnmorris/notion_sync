/**
 * Generated Tool: databasesTool_0954
 * Domain: Databases
 * ID: 0954
 */
exports.databasesTool_0954 = async (notionClient, params = {}) => {
  try {
    const response = await notionClient.databases.query(params);
    return response;
  } catch (error) {
    console.error('Error in databasesTool_0954:', error);
    throw error;
  }
};
