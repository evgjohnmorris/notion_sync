/**
 * Generated Tool: databasesTool_0623
 * Domain: Databases
 * ID: 0623
 */
exports.databasesTool_0623 = async (notionClient, params = {}) => {
  try {
    const response = await notionClient.databases.query(params);
    return response;
  } catch (error) {
    console.error('Error in databasesTool_0623:', error);
    throw error;
  }
};
