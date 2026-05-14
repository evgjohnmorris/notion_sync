/**
 * Generated Tool: databasesTool_0077
 * Domain: Databases
 * ID: 0077
 */
exports.databasesTool_0077 = async (notionClient, params = {}) => {
  try {
    const response = await notionClient.databases.query(params);
    return response;
  } catch (error) {
    console.error('Error in databasesTool_0077:', error);
    throw error;
  }
};
