/**
 * Generated Tool: databasesTool_0467
 * Domain: Databases
 * ID: 0467
 */
exports.databasesTool_0467 = async (notionClient, params = {}) => {
  try {
    const response = await notionClient.databases.query(params);
    return response;
  } catch (error) {
    console.error('Error in databasesTool_0467:', error);
    throw error;
  }
};
