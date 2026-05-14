/**
 * Generated Tool: databasesTool_0524
 * Domain: Databases
 * ID: 0524
 */
exports.databasesTool_0524 = async (notionClient, params = {}) => {
  try {
    const response = await notionClient.databases.query(params);
    return response;
  } catch (error) {
    console.error('Error in databasesTool_0524:', error);
    throw error;
  }
};
