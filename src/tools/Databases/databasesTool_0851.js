/**
 * Generated Tool: databasesTool_0851
 * Domain: Databases
 * ID: 0851
 */
exports.databasesTool_0851 = async (notionClient, params = {}) => {
  try {
    const response = await notionClient.databases.query(params);
    return response;
  } catch (error) {
    console.error('Error in databasesTool_0851:', error);
    throw error;
  }
};
