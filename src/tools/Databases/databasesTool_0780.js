/**
 * Generated Tool: databasesTool_0780
 * Domain: Databases
 * ID: 0780
 */
exports.databasesTool_0780 = async (notionClient, params = {}) => {
  try {
    const response = await notionClient.databases.query(params);
    return response;
  } catch (error) {
    console.error('Error in databasesTool_0780:', error);
    throw error;
  }
};
