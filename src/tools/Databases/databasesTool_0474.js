/**
 * Generated Tool: databasesTool_0474
 * Domain: Databases
 * ID: 0474
 */
exports.databasesTool_0474 = async (notionClient, params = {}) => {
  try {
    const response = await notionClient.databases.query(params);
    return response;
  } catch (error) {
    console.error('Error in databasesTool_0474:', error);
    throw error;
  }
};
