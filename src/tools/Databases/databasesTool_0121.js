/**
 * Generated Tool: databasesTool_0121
 * Domain: Databases
 * ID: 0121
 */
exports.databasesTool_0121 = async (notionClient, params = {}) => {
  try {
    const response = await notionClient.databases.query(params);
    return response;
  } catch (error) {
    console.error('Error in databasesTool_0121:', error);
    throw error;
  }
};
