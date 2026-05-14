/**
 * Generated Tool: databasesTool_0828
 * Domain: Databases
 * ID: 0828
 */
exports.databasesTool_0828 = async (notionClient, params = {}) => {
  try {
    const response = await notionClient.databases.query(params);
    return response;
  } catch (error) {
    console.error('Error in databasesTool_0828:', error);
    throw error;
  }
};
