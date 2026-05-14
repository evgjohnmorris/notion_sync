/**
 * Generated Tool: databasesTool_0278
 * Domain: Databases
 * ID: 0278
 */
exports.databasesTool_0278 = async (notionClient, params = {}) => {
  try {
    const response = await notionClient.databases.query(params);
    return response;
  } catch (error) {
    console.error('Error in databasesTool_0278:', error);
    throw error;
  }
};
