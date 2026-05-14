/**
 * Generated Tool: databasesTool_0690
 * Domain: Databases
 * ID: 0690
 */
exports.databasesTool_0690 = async (notionClient, params = {}) => {
  try {
    const response = await notionClient.databases.query(params);
    return response;
  } catch (error) {
    console.error('Error in databasesTool_0690:', error);
    throw error;
  }
};
