/**
 * Generated Tool: databasesTool_0147
 * Domain: Databases
 * ID: 0147
 */
exports.databasesTool_0147 = async (notionClient, params = {}) => {
  try {
    const response = await notionClient.databases.query(params);
    return response;
  } catch (error) {
    console.error('Error in databasesTool_0147:', error);
    throw error;
  }
};
