/**
 * Generated Tool: databasesTool_0935
 * Domain: Databases
 * ID: 0935
 */
exports.databasesTool_0935 = async (notionClient, params = {}) => {
  try {
    const response = await notionClient.databases.query(params);
    return response;
  } catch (error) {
    console.error('Error in databasesTool_0935:', error);
    throw error;
  }
};
