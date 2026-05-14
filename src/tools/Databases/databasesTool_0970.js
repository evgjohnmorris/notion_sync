/**
 * Generated Tool: databasesTool_0970
 * Domain: Databases
 * ID: 0970
 */
exports.databasesTool_0970 = async (notionClient, params = {}) => {
  try {
    const response = await notionClient.databases.query(params);
    return response;
  } catch (error) {
    console.error('Error in databasesTool_0970:', error);
    throw error;
  }
};
