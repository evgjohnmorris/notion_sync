/**
 * Generated Tool: databasesTool_0990
 * Domain: Databases
 * ID: 0990
 */
exports.databasesTool_0990 = async (notionClient, params = {}) => {
  try {
    const response = await notionClient.databases.query(params);
    return response;
  } catch (error) {
    console.error('Error in databasesTool_0990:', error);
    throw error;
  }
};
