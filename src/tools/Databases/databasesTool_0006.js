/**
 * Generated Tool: databasesTool_0006
 * Domain: Databases
 * ID: 0006
 */
exports.databasesTool_0006 = async (notionClient, params = {}) => {
  try {
    const response = await notionClient.databases.query(params);
    return response;
  } catch (error) {
    console.error('Error in databasesTool_0006:', error);
    throw error;
  }
};
