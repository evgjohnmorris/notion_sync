/**
 * Generated Tool: databasesTool_0345
 * Domain: Databases
 * ID: 0345
 */
exports.databasesTool_0345 = async (notionClient, params = {}) => {
  try {
    const response = await notionClient.databases.query(params);
    return response;
  } catch (error) {
    console.error('Error in databasesTool_0345:', error);
    throw error;
  }
};
