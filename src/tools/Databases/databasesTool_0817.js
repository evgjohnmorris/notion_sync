/**
 * Generated Tool: databasesTool_0817
 * Domain: Databases
 * ID: 0817
 */
exports.databasesTool_0817 = async (notionClient, params = {}) => {
  try {
    const response = await notionClient.databases.query(params);
    return response;
  } catch (error) {
    console.error('Error in databasesTool_0817:', error);
    throw error;
  }
};
