/**
 * Generated Tool: databasesTool_0298
 * Domain: Databases
 * ID: 0298
 */
exports.databasesTool_0298 = async (notionClient, params = {}) => {
  try {
    const response = await notionClient.databases.query(params);
    return response;
  } catch (error) {
    console.error('Error in databasesTool_0298:', error);
    throw error;
  }
};
