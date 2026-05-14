/**
 * Generated Tool: databasesTool_0170
 * Domain: Databases
 * ID: 0170
 */
exports.databasesTool_0170 = async (notionClient, params = {}) => {
  try {
    const response = await notionClient.databases.query(params);
    return response;
  } catch (error) {
    console.error('Error in databasesTool_0170:', error);
    throw error;
  }
};
