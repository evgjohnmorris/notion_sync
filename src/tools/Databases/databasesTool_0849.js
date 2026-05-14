/**
 * Generated Tool: databasesTool_0849
 * Domain: Databases
 * ID: 0849
 */
exports.databasesTool_0849 = async (notionClient, params = {}) => {
  try {
    const response = await notionClient.databases.query(params);
    return response;
  } catch (error) {
    console.error('Error in databasesTool_0849:', error);
    throw error;
  }
};
