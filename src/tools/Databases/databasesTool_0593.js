/**
 * Generated Tool: databasesTool_0593
 * Domain: Databases
 * ID: 0593
 */
exports.databasesTool_0593 = async (notionClient, params = {}) => {
  try {
    const response = await notionClient.databases.query(params);
    return response;
  } catch (error) {
    console.error('Error in databasesTool_0593:', error);
    throw error;
  }
};
