/**
 * Generated Tool: databasesTool_0663
 * Domain: Databases
 * ID: 0663
 */
exports.databasesTool_0663 = async (notionClient, params = {}) => {
  try {
    const response = await notionClient.databases.query(params);
    return response;
  } catch (error) {
    console.error('Error in databasesTool_0663:', error);
    throw error;
  }
};
