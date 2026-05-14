/**
 * Generated Tool: databasesTool_0587
 * Domain: Databases
 * ID: 0587
 */
exports.databasesTool_0587 = async (notionClient, params = {}) => {
  try {
    const response = await notionClient.databases.query(params);
    return response;
  } catch (error) {
    console.error('Error in databasesTool_0587:', error);
    throw error;
  }
};
