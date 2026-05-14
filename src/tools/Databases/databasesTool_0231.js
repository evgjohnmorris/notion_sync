/**
 * Generated Tool: databasesTool_0231
 * Domain: Databases
 * ID: 0231
 */
exports.databasesTool_0231 = async (notionClient, params = {}) => {
  try {
    const response = await notionClient.databases.query(params);
    return response;
  } catch (error) {
    console.error('Error in databasesTool_0231:', error);
    throw error;
  }
};
