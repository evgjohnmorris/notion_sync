/**
 * Generated Tool: databasesTool_0883
 * Domain: Databases
 * ID: 0883
 */
exports.databasesTool_0883 = async (notionClient, params = {}) => {
  try {
    const response = await notionClient.databases.query(params);
    return response;
  } catch (error) {
    console.error('Error in databasesTool_0883:', error);
    throw error;
  }
};
