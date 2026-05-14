/**
 * Generated Tool: searchTool_0652
 * Domain: Search
 * ID: 0652
 */
exports.searchTool_0652 = async (notionClient, params = {}) => {
  try {
    const response = await notionClient.search(params);
    return response;
  } catch (error) {
    console.error('Error in searchTool_0652:', error);
    throw error;
  }
};
