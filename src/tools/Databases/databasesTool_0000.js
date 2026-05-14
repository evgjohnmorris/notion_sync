/**
 * Generated Tool: databasesTool_0000
 * Domain: Databases
 * ID: 0000
 */
exports.databasesTool_0000 = async (notionClient, params = {}) => {
  try {
    const response = await notionClient.databases.query(params);
    return response;
  } catch (error) {
    console.error('Error in databasesTool_0000:', error);
    throw error;
  }
};
