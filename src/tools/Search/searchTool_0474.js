/**
 * Generated Tool: searchTool_0474
 * Domain: Search
 * ID: 0474
 */
exports.searchTool_0474 = async (notionClient, params = {}) => {
  try {
    const response = await notionClient.search(params);
    return response;
  } catch (error) {
    console.error('Error in searchTool_0474:', error);
    throw error;
  }
};
