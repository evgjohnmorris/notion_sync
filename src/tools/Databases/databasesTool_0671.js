/**
 * Generated Tool: databasesTool_0671
 * Domain: Databases
 * ID: 0671
 */
exports.databasesTool_0671 = async (notionClient, params = {}) => {
  try {
    const response = await notionClient.databases.query(params);
    return response;
  } catch (error) {
    console.error('Error in databasesTool_0671:', error);
    throw error;
  }
};
