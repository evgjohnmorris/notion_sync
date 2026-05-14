/**
 * Generated Tool: databasesTool_0102
 * Domain: Databases
 * ID: 0102
 */
exports.databasesTool_0102 = async (notionClient, params = {}) => {
  try {
    const response = await notionClient.databases.query(params);
    return response;
  } catch (error) {
    console.error('Error in databasesTool_0102:', error);
    throw error;
  }
};
