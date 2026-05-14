/**
 * Generated Tool: databasesTool_0949
 * Domain: Databases
 * ID: 0949
 */
exports.databasesTool_0949 = async (notionClient, params = {}) => {
  try {
    const response = await notionClient.databases.query(params);
    return response;
  } catch (error) {
    console.error('Error in databasesTool_0949:', error);
    throw error;
  }
};
