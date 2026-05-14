/**
 * Generated Tool: databasesTool_0762
 * Domain: Databases
 * ID: 0762
 */
exports.databasesTool_0762 = async (notionClient, params = {}) => {
  try {
    const response = await notionClient.databases.query(params);
    return response;
  } catch (error) {
    console.error('Error in databasesTool_0762:', error);
    throw error;
  }
};
