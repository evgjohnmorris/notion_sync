/**
 * Generated Tool: databasesTool_0700
 * Domain: Databases
 * ID: 0700
 */
exports.databasesTool_0700 = async (notionClient, params = {}) => {
  try {
    const response = await notionClient.databases.query(params);
    return response;
  } catch (error) {
    console.error('Error in databasesTool_0700:', error);
    throw error;
  }
};
