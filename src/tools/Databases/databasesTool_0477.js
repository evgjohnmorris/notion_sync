/**
 * Generated Tool: databasesTool_0477
 * Domain: Databases
 * ID: 0477
 */
exports.databasesTool_0477 = async (notionClient, params = {}) => {
  try {
    const response = await notionClient.databases.query(params);
    return response;
  } catch (error) {
    console.error('Error in databasesTool_0477:', error);
    throw error;
  }
};
