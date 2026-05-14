/**
 * Generated Tool: databasesTool_0864
 * Domain: Databases
 * ID: 0864
 */
exports.databasesTool_0864 = async (notionClient, params = {}) => {
  try {
    const response = await notionClient.databases.query(params);
    return response;
  } catch (error) {
    console.error('Error in databasesTool_0864:', error);
    throw error;
  }
};
