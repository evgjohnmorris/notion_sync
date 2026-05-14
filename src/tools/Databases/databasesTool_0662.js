/**
 * Generated Tool: databasesTool_0662
 * Domain: Databases
 * ID: 0662
 */
exports.databasesTool_0662 = async (notionClient, params = {}) => {
  try {
    const response = await notionClient.databases.query(params);
    return response;
  } catch (error) {
    console.error('Error in databasesTool_0662:', error);
    throw error;
  }
};
