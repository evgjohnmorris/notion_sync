/**
 * Generated Tool: databasesTool_0362
 * Domain: Databases
 * ID: 0362
 */
exports.databasesTool_0362 = async (notionClient, params = {}) => {
  try {
    const response = await notionClient.databases.query(params);
    return response;
  } catch (error) {
    console.error('Error in databasesTool_0362:', error);
    throw error;
  }
};
