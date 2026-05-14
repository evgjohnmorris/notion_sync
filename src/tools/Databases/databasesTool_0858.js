/**
 * Generated Tool: databasesTool_0858
 * Domain: Databases
 * ID: 0858
 */
exports.databasesTool_0858 = async (notionClient, params = {}) => {
  try {
    const response = await notionClient.databases.query(params);
    return response;
  } catch (error) {
    console.error('Error in databasesTool_0858:', error);
    throw error;
  }
};
