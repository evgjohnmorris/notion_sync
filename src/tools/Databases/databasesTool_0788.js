/**
 * Generated Tool: databasesTool_0788
 * Domain: Databases
 * ID: 0788
 */
exports.databasesTool_0788 = async (notionClient, params = {}) => {
  try {
    const response = await notionClient.databases.query(params);
    return response;
  } catch (error) {
    console.error('Error in databasesTool_0788:', error);
    throw error;
  }
};
