/**
 * Generated Tool: databasesTool_0236
 * Domain: Databases
 * ID: 0236
 */
exports.databasesTool_0236 = async (notionClient, params = {}) => {
  try {
    const response = await notionClient.databases.query(params);
    return response;
  } catch (error) {
    console.error('Error in databasesTool_0236:', error);
    throw error;
  }
};
