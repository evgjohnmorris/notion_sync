/**
 * Generated Tool: databasesTool_0913
 * Domain: Databases
 * ID: 0913
 */
exports.databasesTool_0913 = async (notionClient, params = {}) => {
  try {
    const response = await notionClient.databases.query(params);
    return response;
  } catch (error) {
    console.error('Error in databasesTool_0913:', error);
    throw error;
  }
};
