/**
 * Generated Tool: databasesTool_0406
 * Domain: Databases
 * ID: 0406
 */
exports.databasesTool_0406 = async (notionClient, params = {}) => {
  try {
    const response = await notionClient.databases.query(params);
    return response;
  } catch (error) {
    console.error('Error in databasesTool_0406:', error);
    throw error;
  }
};
