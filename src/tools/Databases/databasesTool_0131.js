/**
 * Generated Tool: databasesTool_0131
 * Domain: Databases
 * ID: 0131
 */
exports.databasesTool_0131 = async (notionClient, params = {}) => {
  try {
    const response = await notionClient.databases.query(params);
    return response;
  } catch (error) {
    console.error('Error in databasesTool_0131:', error);
    throw error;
  }
};
