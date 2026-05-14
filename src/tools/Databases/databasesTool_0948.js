/**
 * Generated Tool: databasesTool_0948
 * Domain: Databases
 * ID: 0948
 */
exports.databasesTool_0948 = async (notionClient, params = {}) => {
  try {
    const response = await notionClient.databases.query(params);
    return response;
  } catch (error) {
    console.error('Error in databasesTool_0948:', error);
    throw error;
  }
};
