/**
 * Generated Tool: databasesTool_0926
 * Domain: Databases
 * ID: 0926
 */
exports.databasesTool_0926 = async (notionClient, params = {}) => {
  try {
    const response = await notionClient.databases.query(params);
    return response;
  } catch (error) {
    console.error('Error in databasesTool_0926:', error);
    throw error;
  }
};
