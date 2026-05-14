/**
 * Generated Tool: databasesTool_0844
 * Domain: Databases
 * ID: 0844
 */
exports.databasesTool_0844 = async (notionClient, params = {}) => {
  try {
    const response = await notionClient.databases.query(params);
    return response;
  } catch (error) {
    console.error('Error in databasesTool_0844:', error);
    throw error;
  }
};
