/**
 * Generated Tool: databasesTool_0625
 * Domain: Databases
 * ID: 0625
 */
exports.databasesTool_0625 = async (notionClient, params = {}) => {
  try {
    const response = await notionClient.databases.query(params);
    return response;
  } catch (error) {
    console.error('Error in databasesTool_0625:', error);
    throw error;
  }
};
