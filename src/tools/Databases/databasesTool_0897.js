/**
 * Generated Tool: databasesTool_0897
 * Domain: Databases
 * ID: 0897
 */
exports.databasesTool_0897 = async (notionClient, params = {}) => {
  try {
    const response = await notionClient.databases.query(params);
    return response;
  } catch (error) {
    console.error('Error in databasesTool_0897:', error);
    throw error;
  }
};
