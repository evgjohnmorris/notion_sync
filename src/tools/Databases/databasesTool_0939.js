/**
 * Generated Tool: databasesTool_0939
 * Domain: Databases
 * ID: 0939
 */
exports.databasesTool_0939 = async (notionClient, params = {}) => {
  try {
    const response = await notionClient.databases.query(params);
    return response;
  } catch (error) {
    console.error('Error in databasesTool_0939:', error);
    throw error;
  }
};
