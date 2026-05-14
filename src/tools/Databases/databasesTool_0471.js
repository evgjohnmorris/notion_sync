/**
 * Generated Tool: databasesTool_0471
 * Domain: Databases
 * ID: 0471
 */
exports.databasesTool_0471 = async (notionClient, params = {}) => {
  try {
    const response = await notionClient.databases.query(params);
    return response;
  } catch (error) {
    console.error('Error in databasesTool_0471:', error);
    throw error;
  }
};
