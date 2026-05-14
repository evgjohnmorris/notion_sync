/**
 * Generated Tool: databasesTool_0810
 * Domain: Databases
 * ID: 0810
 */
exports.databasesTool_0810 = async (notionClient, params = {}) => {
  try {
    const response = await notionClient.databases.query(params);
    return response;
  } catch (error) {
    console.error('Error in databasesTool_0810:', error);
    throw error;
  }
};
