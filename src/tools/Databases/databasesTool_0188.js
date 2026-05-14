/**
 * Generated Tool: databasesTool_0188
 * Domain: Databases
 * ID: 0188
 */
exports.databasesTool_0188 = async (notionClient, params = {}) => {
  try {
    const response = await notionClient.databases.query(params);
    return response;
  } catch (error) {
    console.error('Error in databasesTool_0188:', error);
    throw error;
  }
};
