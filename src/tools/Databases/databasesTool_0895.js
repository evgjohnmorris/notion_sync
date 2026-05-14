/**
 * Generated Tool: databasesTool_0895
 * Domain: Databases
 * ID: 0895
 */
exports.databasesTool_0895 = async (notionClient, params = {}) => {
  try {
    const response = await notionClient.databases.query(params);
    return response;
  } catch (error) {
    console.error('Error in databasesTool_0895:', error);
    throw error;
  }
};
