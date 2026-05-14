/**
 * Generated Tool: databasesTool_0790
 * Domain: Databases
 * ID: 0790
 */
exports.databasesTool_0790 = async (notionClient, params = {}) => {
  try {
    const response = await notionClient.databases.query(params);
    return response;
  } catch (error) {
    console.error('Error in databasesTool_0790:', error);
    throw error;
  }
};
