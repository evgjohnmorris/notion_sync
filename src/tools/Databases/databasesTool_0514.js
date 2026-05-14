/**
 * Generated Tool: databasesTool_0514
 * Domain: Databases
 * ID: 0514
 */
exports.databasesTool_0514 = async (notionClient, params = {}) => {
  try {
    const response = await notionClient.databases.query(params);
    return response;
  } catch (error) {
    console.error('Error in databasesTool_0514:', error);
    throw error;
  }
};
