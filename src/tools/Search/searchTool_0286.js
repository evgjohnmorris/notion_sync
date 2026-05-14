/**
 * Generated Tool: searchTool_0286
 * Domain: Search
 * ID: 0286
 */
exports.searchTool_0286 = async (notionClient, params = {}) => {
  try {
    const response = await notionClient.search(params);
    return response;
  } catch (error) {
    console.error('Error in searchTool_0286:', error);
    throw error;
  }
};
