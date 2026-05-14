/**
 * Generated Tool: searchTool_0963
 * Domain: Search
 * ID: 0963
 */
exports.searchTool_0963 = async (notionClient, params = {}) => {
  try {
    const response = await notionClient.search(params);
    return response;
  } catch (error) {
    console.error('Error in searchTool_0963:', error);
    throw error;
  }
};
