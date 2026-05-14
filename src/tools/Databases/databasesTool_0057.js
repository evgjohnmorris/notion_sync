/**
 * Generated Tool: databasesTool_0057
 * Domain: Databases
 * ID: 0057
 */
exports.databasesTool_0057 = async (notionClient, params = {}) => {
  try {
    const response = await notionClient.databases.query(params);
    return response;
  } catch (error) {
    console.error('Error in databasesTool_0057:', error);
    throw error;
  }
};
