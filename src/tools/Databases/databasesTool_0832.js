/**
 * Generated Tool: databasesTool_0832
 * Domain: Databases
 * ID: 0832
 */
exports.databasesTool_0832 = async (notionClient, params = {}) => {
  try {
    const response = await notionClient.databases.query(params);
    return response;
  } catch (error) {
    console.error('Error in databasesTool_0832:', error);
    throw error;
  }
};
