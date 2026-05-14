/**
 * Generated Tool: databasesTool_0063
 * Domain: Databases
 * ID: 0063
 */
exports.databasesTool_0063 = async (notionClient, params = {}) => {
  try {
    const response = await notionClient.databases.query(params);
    return response;
  } catch (error) {
    console.error('Error in databasesTool_0063:', error);
    throw error;
  }
};
