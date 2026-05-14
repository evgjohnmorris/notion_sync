/**
 * Generated Tool: databasesTool_0615
 * Domain: Databases
 * ID: 0615
 */
exports.databasesTool_0615 = async (notionClient, params = {}) => {
  try {
    const response = await notionClient.databases.query(params);
    return response;
  } catch (error) {
    console.error('Error in databasesTool_0615:', error);
    throw error;
  }
};
