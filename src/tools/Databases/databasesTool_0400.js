/**
 * Generated Tool: databasesTool_0400
 * Domain: Databases
 * ID: 0400
 */
exports.databasesTool_0400 = async (notionClient, params = {}) => {
  try {
    const response = await notionClient.databases.query(params);
    return response;
  } catch (error) {
    console.error('Error in databasesTool_0400:', error);
    throw error;
  }
};
