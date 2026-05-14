/**
 * Generated Tool: databasesTool_0670
 * Domain: Databases
 * ID: 0670
 */
exports.databasesTool_0670 = async (notionClient, params = {}) => {
  try {
    const response = await notionClient.databases.query(params);
    return response;
  } catch (error) {
    console.error('Error in databasesTool_0670:', error);
    throw error;
  }
};
