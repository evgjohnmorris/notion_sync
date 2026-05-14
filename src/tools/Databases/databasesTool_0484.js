/**
 * Generated Tool: databasesTool_0484
 * Domain: Databases
 * ID: 0484
 */
exports.databasesTool_0484 = async (notionClient, params = {}) => {
  try {
    const response = await notionClient.databases.query(params);
    return response;
  } catch (error) {
    console.error('Error in databasesTool_0484:', error);
    throw error;
  }
};
