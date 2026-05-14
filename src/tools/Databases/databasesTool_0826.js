/**
 * Generated Tool: databasesTool_0826
 * Domain: Databases
 * ID: 0826
 */
exports.databasesTool_0826 = async (notionClient, params = {}) => {
  try {
    const response = await notionClient.databases.query(params);
    return response;
  } catch (error) {
    console.error('Error in databasesTool_0826:', error);
    throw error;
  }
};
