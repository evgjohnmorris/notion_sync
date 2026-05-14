/**
 * Generated Tool: databasesTool_0320
 * Domain: Databases
 * ID: 0320
 */
exports.databasesTool_0320 = async (notionClient, params = {}) => {
  try {
    const response = await notionClient.databases.query(params);
    return response;
  } catch (error) {
    console.error('Error in databasesTool_0320:', error);
    throw error;
  }
};
