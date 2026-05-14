/**
 * Generated Tool: databasesTool_0381
 * Domain: Databases
 * ID: 0381
 */
exports.databasesTool_0381 = async (notionClient, params = {}) => {
  try {
    const response = await notionClient.databases.query(params);
    return response;
  } catch (error) {
    console.error('Error in databasesTool_0381:', error);
    throw error;
  }
};
