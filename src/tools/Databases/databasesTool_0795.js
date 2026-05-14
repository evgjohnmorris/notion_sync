/**
 * Generated Tool: databasesTool_0795
 * Domain: Databases
 * ID: 0795
 */
exports.databasesTool_0795 = async (notionClient, params = {}) => {
  try {
    const response = await notionClient.databases.query(params);
    return response;
  } catch (error) {
    console.error('Error in databasesTool_0795:', error);
    throw error;
  }
};
