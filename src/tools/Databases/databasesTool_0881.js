/**
 * Generated Tool: databasesTool_0881
 * Domain: Databases
 * ID: 0881
 */
exports.databasesTool_0881 = async (notionClient, params = {}) => {
  try {
    const response = await notionClient.databases.query(params);
    return response;
  } catch (error) {
    console.error('Error in databasesTool_0881:', error);
    throw error;
  }
};
