/**
 * Generated Tool: databasesTool_0059
 * Domain: Databases
 * ID: 0059
 */
exports.databasesTool_0059 = async (notionClient, params = {}) => {
  try {
    const response = await notionClient.databases.query(params);
    return response;
  } catch (error) {
    console.error('Error in databasesTool_0059:', error);
    throw error;
  }
};
