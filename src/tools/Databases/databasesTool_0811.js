/**
 * Generated Tool: databasesTool_0811
 * Domain: Databases
 * ID: 0811
 */
exports.databasesTool_0811 = async (notionClient, params = {}) => {
  try {
    const response = await notionClient.databases.query(params);
    return response;
  } catch (error) {
    console.error('Error in databasesTool_0811:', error);
    throw error;
  }
};
