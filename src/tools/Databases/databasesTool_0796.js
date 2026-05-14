/**
 * Generated Tool: databasesTool_0796
 * Domain: Databases
 * ID: 0796
 */
exports.databasesTool_0796 = async (notionClient, params = {}) => {
  try {
    const response = await notionClient.databases.query(params);
    return response;
  } catch (error) {
    console.error('Error in databasesTool_0796:', error);
    throw error;
  }
};
