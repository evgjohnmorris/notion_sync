/**
 * Generated Tool: databasesTool_0709
 * Domain: Databases
 * ID: 0709
 */
exports.databasesTool_0709 = async (notionClient, params = {}) => {
  try {
    const response = await notionClient.databases.query(params);
    return response;
  } catch (error) {
    console.error('Error in databasesTool_0709:', error);
    throw error;
  }
};
