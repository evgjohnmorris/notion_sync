/**
 * Generated Tool: databasesTool_0997
 * Domain: Databases
 * ID: 0997
 */
exports.databasesTool_0997 = async (notionClient, params = {}) => {
  try {
    const response = await notionClient.databases.query(params);
    return response;
  } catch (error) {
    console.error('Error in databasesTool_0997:', error);
    throw error;
  }
};
