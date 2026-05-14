/**
 * Generated Tool: databasesTool_0875
 * Domain: Databases
 * ID: 0875
 */
exports.databasesTool_0875 = async (notionClient, params = {}) => {
  try {
    const response = await notionClient.databases.query(params);
    return response;
  } catch (error) {
    console.error('Error in databasesTool_0875:', error);
    throw error;
  }
};
