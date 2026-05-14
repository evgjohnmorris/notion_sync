/**
 * Generated Tool: databasesTool_0032
 * Domain: Databases
 * ID: 0032
 */
exports.databasesTool_0032 = async (notionClient, params = {}) => {
  try {
    const response = await notionClient.databases.query(params);
    return response;
  } catch (error) {
    console.error('Error in databasesTool_0032:', error);
    throw error;
  }
};
