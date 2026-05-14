/**
 * Generated Tool: databasesTool_0075
 * Domain: Databases
 * ID: 0075
 */
exports.databasesTool_0075 = async (notionClient, params = {}) => {
  try {
    const response = await notionClient.databases.query(params);
    return response;
  } catch (error) {
    console.error('Error in databasesTool_0075:', error);
    throw error;
  }
};
