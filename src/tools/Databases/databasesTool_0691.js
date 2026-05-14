/**
 * Generated Tool: databasesTool_0691
 * Domain: Databases
 * ID: 0691
 */
exports.databasesTool_0691 = async (notionClient, params = {}) => {
  try {
    const response = await notionClient.databases.query(params);
    return response;
  } catch (error) {
    console.error('Error in databasesTool_0691:', error);
    throw error;
  }
};
