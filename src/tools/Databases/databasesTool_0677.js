/**
 * Generated Tool: databasesTool_0677
 * Domain: Databases
 * ID: 0677
 */
exports.databasesTool_0677 = async (notionClient, params = {}) => {
  try {
    const response = await notionClient.databases.query(params);
    return response;
  } catch (error) {
    console.error('Error in databasesTool_0677:', error);
    throw error;
  }
};
