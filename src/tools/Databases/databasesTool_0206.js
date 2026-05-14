/**
 * Generated Tool: databasesTool_0206
 * Domain: Databases
 * ID: 0206
 */
exports.databasesTool_0206 = async (notionClient, params = {}) => {
  try {
    const response = await notionClient.databases.query(params);
    return response;
  } catch (error) {
    console.error('Error in databasesTool_0206:', error);
    throw error;
  }
};
