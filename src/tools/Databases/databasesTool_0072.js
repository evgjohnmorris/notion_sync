/**
 * Generated Tool: databasesTool_0072
 * Domain: Databases
 * ID: 0072
 */
exports.databasesTool_0072 = async (notionClient, params = {}) => {
  try {
    const response = await notionClient.databases.query(params);
    return response;
  } catch (error) {
    console.error('Error in databasesTool_0072:', error);
    throw error;
  }
};
