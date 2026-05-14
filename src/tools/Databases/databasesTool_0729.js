/**
 * Generated Tool: databasesTool_0729
 * Domain: Databases
 * ID: 0729
 */
exports.databasesTool_0729 = async (notionClient, params = {}) => {
  try {
    const response = await notionClient.databases.query(params);
    return response;
  } catch (error) {
    console.error('Error in databasesTool_0729:', error);
    throw error;
  }
};
