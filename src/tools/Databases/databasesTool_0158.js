/**
 * Generated Tool: databasesTool_0158
 * Domain: Databases
 * ID: 0158
 */
exports.databasesTool_0158 = async (notionClient, params = {}) => {
  try {
    const response = await notionClient.databases.query(params);
    return response;
  } catch (error) {
    console.error('Error in databasesTool_0158:', error);
    throw error;
  }
};
