/**
 * Generated Tool: databasesTool_0457
 * Domain: Databases
 * ID: 0457
 */
exports.databasesTool_0457 = async (notionClient, params = {}) => {
  try {
    const response = await notionClient.databases.query(params);
    return response;
  } catch (error) {
    console.error('Error in databasesTool_0457:', error);
    throw error;
  }
};
