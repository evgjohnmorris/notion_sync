/**
 * Generated Tool: databasesTool_0112
 * Domain: Databases
 * ID: 0112
 */
exports.databasesTool_0112 = async (notionClient, params = {}) => {
  try {
    const response = await notionClient.databases.query(params);
    return response;
  } catch (error) {
    console.error('Error in databasesTool_0112:', error);
    throw error;
  }
};
