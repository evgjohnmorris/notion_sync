/**
 * Generated Tool: databasesTool_0989
 * Domain: Databases
 * ID: 0989
 */
exports.databasesTool_0989 = async (notionClient, params = {}) => {
  try {
    const response = await notionClient.databases.query(params);
    return response;
  } catch (error) {
    console.error('Error in databasesTool_0989:', error);
    throw error;
  }
};
