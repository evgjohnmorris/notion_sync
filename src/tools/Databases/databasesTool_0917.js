/**
 * Generated Tool: databasesTool_0917
 * Domain: Databases
 * ID: 0917
 */
exports.databasesTool_0917 = async (notionClient, params = {}) => {
  try {
    const response = await notionClient.databases.query(params);
    return response;
  } catch (error) {
    console.error('Error in databasesTool_0917:', error);
    throw error;
  }
};
