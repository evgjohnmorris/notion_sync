/**
 * Generated Tool: databasesTool_0436
 * Domain: Databases
 * ID: 0436
 */
exports.databasesTool_0436 = async (notionClient, params = {}) => {
  try {
    const response = await notionClient.databases.query(params);
    return response;
  } catch (error) {
    console.error('Error in databasesTool_0436:', error);
    throw error;
  }
};
