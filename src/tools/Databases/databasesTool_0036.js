/**
 * Generated Tool: databasesTool_0036
 * Domain: Databases
 * ID: 0036
 */
exports.databasesTool_0036 = async (notionClient, params = {}) => {
  try {
    const response = await notionClient.databases.query(params);
    return response;
  } catch (error) {
    console.error('Error in databasesTool_0036:', error);
    throw error;
  }
};
