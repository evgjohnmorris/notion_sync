/**
 * Generated Tool: databasesTool_0518
 * Domain: Databases
 * ID: 0518
 */
exports.databasesTool_0518 = async (notionClient, params = {}) => {
  try {
    const response = await notionClient.databases.query(params);
    return response;
  } catch (error) {
    console.error('Error in databasesTool_0518:', error);
    throw error;
  }
};
