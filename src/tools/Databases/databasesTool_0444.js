/**
 * Generated Tool: databasesTool_0444
 * Domain: Databases
 * ID: 0444
 */
exports.databasesTool_0444 = async (notionClient, params = {}) => {
  try {
    const response = await notionClient.databases.query(params);
    return response;
  } catch (error) {
    console.error('Error in databasesTool_0444:', error);
    throw error;
  }
};
