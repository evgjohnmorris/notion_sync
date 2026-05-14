/**
 * Generated Tool: databasesTool_0717
 * Domain: Databases
 * ID: 0717
 */
exports.databasesTool_0717 = async (notionClient, params = {}) => {
  try {
    const response = await notionClient.databases.query(params);
    return response;
  } catch (error) {
    console.error('Error in databasesTool_0717:', error);
    throw error;
  }
};
