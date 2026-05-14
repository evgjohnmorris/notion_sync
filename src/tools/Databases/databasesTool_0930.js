/**
 * Generated Tool: databasesTool_0930
 * Domain: Databases
 * ID: 0930
 */
exports.databasesTool_0930 = async (notionClient, params = {}) => {
  try {
    const response = await notionClient.databases.query(params);
    return response;
  } catch (error) {
    console.error('Error in databasesTool_0930:', error);
    throw error;
  }
};
