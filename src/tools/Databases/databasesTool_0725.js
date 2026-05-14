/**
 * Generated Tool: databasesTool_0725
 * Domain: Databases
 * ID: 0725
 */
exports.databasesTool_0725 = async (notionClient, params = {}) => {
  try {
    const response = await notionClient.databases.query(params);
    return response;
  } catch (error) {
    console.error('Error in databasesTool_0725:', error);
    throw error;
  }
};
