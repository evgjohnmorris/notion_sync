/**
 * Generated Tool: databasesTool_0469
 * Domain: Databases
 * ID: 0469
 */
exports.databasesTool_0469 = async (notionClient, params = {}) => {
  try {
    const response = await notionClient.databases.query(params);
    return response;
  } catch (error) {
    console.error('Error in databasesTool_0469:', error);
    throw error;
  }
};
