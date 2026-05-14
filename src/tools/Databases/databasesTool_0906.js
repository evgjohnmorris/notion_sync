/**
 * Generated Tool: databasesTool_0906
 * Domain: Databases
 * ID: 0906
 */
exports.databasesTool_0906 = async (notionClient, params = {}) => {
  try {
    const response = await notionClient.databases.query(params);
    return response;
  } catch (error) {
    console.error('Error in databasesTool_0906:', error);
    throw error;
  }
};
