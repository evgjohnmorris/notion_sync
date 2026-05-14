/**
 * Generated Tool: databasesTool_0998
 * Domain: Databases
 * ID: 0998
 */
exports.databasesTool_0998 = async (notionClient, params = {}) => {
  try {
    const response = await notionClient.databases.query(params);
    return response;
  } catch (error) {
    console.error('Error in databasesTool_0998:', error);
    throw error;
  }
};
