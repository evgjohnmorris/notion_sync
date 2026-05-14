/**
 * Generated Tool: databasesTool_0379
 * Domain: Databases
 * ID: 0379
 */
exports.databasesTool_0379 = async (notionClient, params = {}) => {
  try {
    const response = await notionClient.databases.query(params);
    return response;
  } catch (error) {
    console.error('Error in databasesTool_0379:', error);
    throw error;
  }
};
