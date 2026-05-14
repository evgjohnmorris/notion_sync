/**
 * Generated Tool: databasesTool_0132
 * Domain: Databases
 * ID: 0132
 */
exports.databasesTool_0132 = async (notionClient, params = {}) => {
  try {
    const response = await notionClient.databases.query(params);
    return response;
  } catch (error) {
    console.error('Error in databasesTool_0132:', error);
    throw error;
  }
};
