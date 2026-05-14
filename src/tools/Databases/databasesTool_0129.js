/**
 * Generated Tool: databasesTool_0129
 * Domain: Databases
 * ID: 0129
 */
exports.databasesTool_0129 = async (notionClient, params = {}) => {
  try {
    const response = await notionClient.databases.query(params);
    return response;
  } catch (error) {
    console.error('Error in databasesTool_0129:', error);
    throw error;
  }
};
