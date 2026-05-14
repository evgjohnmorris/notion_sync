/**
 * Generated Tool: databasesTool_0706
 * Domain: Databases
 * ID: 0706
 */
exports.databasesTool_0706 = async (notionClient, params = {}) => {
  try {
    const response = await notionClient.databases.query(params);
    return response;
  } catch (error) {
    console.error('Error in databasesTool_0706:', error);
    throw error;
  }
};
