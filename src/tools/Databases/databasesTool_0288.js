/**
 * Generated Tool: databasesTool_0288
 * Domain: Databases
 * ID: 0288
 */
exports.databasesTool_0288 = async (notionClient, params = {}) => {
  try {
    const response = await notionClient.databases.query(params);
    return response;
  } catch (error) {
    console.error('Error in databasesTool_0288:', error);
    throw error;
  }
};
