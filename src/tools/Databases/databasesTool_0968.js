/**
 * Generated Tool: databasesTool_0968
 * Domain: Databases
 * ID: 0968
 */
exports.databasesTool_0968 = async (notionClient, params = {}) => {
  try {
    const response = await notionClient.databases.query(params);
    return response;
  } catch (error) {
    console.error('Error in databasesTool_0968:', error);
    throw error;
  }
};
