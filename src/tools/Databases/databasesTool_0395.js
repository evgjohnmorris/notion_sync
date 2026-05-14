/**
 * Generated Tool: databasesTool_0395
 * Domain: Databases
 * ID: 0395
 */
exports.databasesTool_0395 = async (notionClient, params = {}) => {
  try {
    const response = await notionClient.databases.query(params);
    return response;
  } catch (error) {
    console.error('Error in databasesTool_0395:', error);
    throw error;
  }
};
