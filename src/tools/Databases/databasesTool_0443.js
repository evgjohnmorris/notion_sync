/**
 * Generated Tool: databasesTool_0443
 * Domain: Databases
 * ID: 0443
 */
exports.databasesTool_0443 = async (notionClient, params = {}) => {
  try {
    const response = await notionClient.databases.query(params);
    return response;
  } catch (error) {
    console.error('Error in databasesTool_0443:', error);
    throw error;
  }
};
