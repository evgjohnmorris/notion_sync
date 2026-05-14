/**
 * Generated Tool: searchTool_0431
 * Domain: Search
 * ID: 0431
 */
exports.searchTool_0431 = async (notionClient, params = {}) => {
  try {
    const response = await notionClient.search(params);
    return response;
  } catch (error) {
    console.error('Error in searchTool_0431:', error);
    throw error;
  }
};
