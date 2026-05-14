/**
 * Generated Tool: databasesTool_0246
 * Domain: Databases
 * ID: 0246
 */
exports.databasesTool_0246 = async (notionClient, params = {}) => {
  try {
    const response = await notionClient.databases.query(params);
    return response;
  } catch (error) {
    console.error('Error in databasesTool_0246:', error);
    throw error;
  }
};
