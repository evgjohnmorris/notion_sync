/**
 * Generated Tool: searchTool_0026
 * Domain: Search
 * ID: 0026
 */
exports.searchTool_0026 = async (notionClient, params = {}) => {
  try {
    const response = await notionClient.search(params);
    return response;
  } catch (error) {
    console.error('Error in searchTool_0026:', error);
    throw error;
  }
};
