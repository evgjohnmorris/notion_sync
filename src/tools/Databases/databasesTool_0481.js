/**
 * Generated Tool: databasesTool_0481
 * Domain: Databases
 * ID: 0481
 */
exports.databasesTool_0481 = async (notionClient, params = {}) => {
  try {
    const response = await notionClient.databases.query(params);
    return response;
  } catch (error) {
    console.error('Error in databasesTool_0481:', error);
    throw error;
  }
};
