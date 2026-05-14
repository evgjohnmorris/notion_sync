/**
 * Generated Tool: searchTool_0037
 * Domain: Search
 * ID: 0037
 */
exports.searchTool_0037 = async (notionClient, params = {}) => {
  try {
    const response = await notionClient.search(params);
    return response;
  } catch (error) {
    console.error('Error in searchTool_0037:', error);
    throw error;
  }
};
