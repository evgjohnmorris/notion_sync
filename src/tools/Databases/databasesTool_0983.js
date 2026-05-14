/**
 * Generated Tool: databasesTool_0983
 * Domain: Databases
 * ID: 0983
 */
exports.databasesTool_0983 = async (notionClient, params = {}) => {
  try {
    const response = await notionClient.databases.query(params);
    return response;
  } catch (error) {
    console.error('Error in databasesTool_0983:', error);
    throw error;
  }
};
