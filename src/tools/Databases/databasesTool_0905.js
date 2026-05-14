/**
 * Generated Tool: databasesTool_0905
 * Domain: Databases
 * ID: 0905
 */
exports.databasesTool_0905 = async (notionClient, params = {}) => {
  try {
    const response = await notionClient.databases.query(params);
    return response;
  } catch (error) {
    console.error('Error in databasesTool_0905:', error);
    throw error;
  }
};
