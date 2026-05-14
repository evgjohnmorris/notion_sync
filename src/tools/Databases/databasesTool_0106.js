/**
 * Generated Tool: databasesTool_0106
 * Domain: Databases
 * ID: 0106
 */
exports.databasesTool_0106 = async (notionClient, params = {}) => {
  try {
    const response = await notionClient.databases.query(params);
    return response;
  } catch (error) {
    console.error('Error in databasesTool_0106:', error);
    throw error;
  }
};
