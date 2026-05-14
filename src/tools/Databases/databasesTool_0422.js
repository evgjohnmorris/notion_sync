/**
 * Generated Tool: databasesTool_0422
 * Domain: Databases
 * ID: 0422
 */
exports.databasesTool_0422 = async (notionClient, params = {}) => {
  try {
    const response = await notionClient.databases.query(params);
    return response;
  } catch (error) {
    console.error('Error in databasesTool_0422:', error);
    throw error;
  }
};
