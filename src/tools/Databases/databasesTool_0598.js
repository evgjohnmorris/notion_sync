/**
 * Generated Tool: databasesTool_0598
 * Domain: Databases
 * ID: 0598
 */
exports.databasesTool_0598 = async (notionClient, params = {}) => {
  try {
    const response = await notionClient.databases.query(params);
    return response;
  } catch (error) {
    console.error('Error in databasesTool_0598:', error);
    throw error;
  }
};
