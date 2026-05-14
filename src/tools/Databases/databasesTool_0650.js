/**
 * Generated Tool: databasesTool_0650
 * Domain: Databases
 * ID: 0650
 */
exports.databasesTool_0650 = async (notionClient, params = {}) => {
  try {
    const response = await notionClient.databases.query(params);
    return response;
  } catch (error) {
    console.error('Error in databasesTool_0650:', error);
    throw error;
  }
};
