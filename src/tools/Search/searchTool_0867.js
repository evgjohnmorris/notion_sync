/**
 * Generated Tool: searchTool_0867
 * Domain: Search
 * ID: 0867
 */
exports.searchTool_0867 = async (notionClient, params = {}) => {
  try {
    const response = await notionClient.search(params);
    return response;
  } catch (error) {
    console.error('Error in searchTool_0867:', error);
    throw error;
  }
};
