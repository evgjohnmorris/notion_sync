/**
 * Generated Tool: databasesTool_0110
 * Domain: Databases
 * ID: 0110
 */
exports.databasesTool_0110 = async (notionClient, params = {}) => {
  try {
    const response = await notionClient.databases.query(params);
    return response;
  } catch (error) {
    console.error('Error in databasesTool_0110:', error);
    throw error;
  }
};
