/**
 * Generated Tool: databasesTool_0407
 * Domain: Databases
 * ID: 0407
 */
exports.databasesTool_0407 = async (notionClient, params = {}) => {
  try {
    const response = await notionClient.databases.query(params);
    return response;
  } catch (error) {
    console.error('Error in databasesTool_0407:', error);
    throw error;
  }
};
