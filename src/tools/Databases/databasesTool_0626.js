/**
 * Generated Tool: databasesTool_0626
 * Domain: Databases
 * ID: 0626
 */
exports.databasesTool_0626 = async (notionClient, params = {}) => {
  try {
    const response = await notionClient.databases.query(params);
    return response;
  } catch (error) {
    console.error('Error in databasesTool_0626:', error);
    throw error;
  }
};
