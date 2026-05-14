/**
 * Generated Tool: databasesTool_0958
 * Domain: Databases
 * ID: 0958
 */
exports.databasesTool_0958 = async (notionClient, params = {}) => {
  try {
    const response = await notionClient.databases.query(params);
    return response;
  } catch (error) {
    console.error('Error in databasesTool_0958:', error);
    throw error;
  }
};
