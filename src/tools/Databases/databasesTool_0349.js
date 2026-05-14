/**
 * Generated Tool: databasesTool_0349
 * Domain: Databases
 * ID: 0349
 */
exports.databasesTool_0349 = async (notionClient, params = {}) => {
  try {
    const response = await notionClient.databases.query(params);
    return response;
  } catch (error) {
    console.error('Error in databasesTool_0349:', error);
    throw error;
  }
};
