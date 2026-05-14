/**
 * Generated Tool: databasesTool_0403
 * Domain: Databases
 * ID: 0403
 */
exports.databasesTool_0403 = async (notionClient, params = {}) => {
  try {
    const response = await notionClient.databases.query(params);
    return response;
  } catch (error) {
    console.error('Error in databasesTool_0403:', error);
    throw error;
  }
};
