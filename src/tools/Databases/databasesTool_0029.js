/**
 * Generated Tool: databasesTool_0029
 * Domain: Databases
 * ID: 0029
 */
exports.databasesTool_0029 = async (notionClient, params = {}) => {
  try {
    const response = await notionClient.databases.query(params);
    return response;
  } catch (error) {
    console.error('Error in databasesTool_0029:', error);
    throw error;
  }
};
