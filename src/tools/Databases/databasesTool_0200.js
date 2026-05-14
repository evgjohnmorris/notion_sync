/**
 * Generated Tool: databasesTool_0200
 * Domain: Databases
 * ID: 0200
 */
exports.databasesTool_0200 = async (notionClient, params = {}) => {
  try {
    const response = await notionClient.databases.query(params);
    return response;
  } catch (error) {
    console.error('Error in databasesTool_0200:', error);
    throw error;
  }
};
