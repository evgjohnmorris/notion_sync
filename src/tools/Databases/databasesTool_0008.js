/**
 * Generated Tool: databasesTool_0008
 * Domain: Databases
 * ID: 0008
 */
exports.databasesTool_0008 = async (notionClient, params = {}) => {
  try {
    const response = await notionClient.databases.query(params);
    return response;
  } catch (error) {
    console.error('Error in databasesTool_0008:', error);
    throw error;
  }
};
