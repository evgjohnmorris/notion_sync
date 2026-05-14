/**
 * Generated Tool: databasesTool_0476
 * Domain: Databases
 * ID: 0476
 */
exports.databasesTool_0476 = async (notionClient, params = {}) => {
  try {
    const response = await notionClient.databases.query(params);
    return response;
  } catch (error) {
    console.error('Error in databasesTool_0476:', error);
    throw error;
  }
};
