/**
 * Generated Tool: databasesTool_0180
 * Domain: Databases
 * ID: 0180
 */
exports.databasesTool_0180 = async (notionClient, params = {}) => {
  try {
    const response = await notionClient.databases.query(params);
    return response;
  } catch (error) {
    console.error('Error in databasesTool_0180:', error);
    throw error;
  }
};
