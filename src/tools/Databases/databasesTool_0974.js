/**
 * Generated Tool: databasesTool_0974
 * Domain: Databases
 * ID: 0974
 */
exports.databasesTool_0974 = async (notionClient, params = {}) => {
  try {
    const response = await notionClient.databases.query(params);
    return response;
  } catch (error) {
    console.error('Error in databasesTool_0974:', error);
    throw error;
  }
};
