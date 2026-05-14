/**
 * Generated Tool: databasesTool_0611
 * Domain: Databases
 * ID: 0611
 */
exports.databasesTool_0611 = async (notionClient, params = {}) => {
  try {
    const response = await notionClient.databases.query(params);
    return response;
  } catch (error) {
    console.error('Error in databasesTool_0611:', error);
    throw error;
  }
};
