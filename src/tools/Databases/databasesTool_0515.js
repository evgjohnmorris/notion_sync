/**
 * Generated Tool: databasesTool_0515
 * Domain: Databases
 * ID: 0515
 */
exports.databasesTool_0515 = async (notionClient, params = {}) => {
  try {
    const response = await notionClient.databases.query(params);
    return response;
  } catch (error) {
    console.error('Error in databasesTool_0515:', error);
    throw error;
  }
};
