/**
 * Generated Tool: searchTool_0254
 * Domain: Search
 * ID: 0254
 */
exports.searchTool_0254 = async (notionClient, params = {}) => {
  try {
    const response = await notionClient.search(params);
    return response;
  } catch (error) {
    console.error('Error in searchTool_0254:', error);
    throw error;
  }
};
