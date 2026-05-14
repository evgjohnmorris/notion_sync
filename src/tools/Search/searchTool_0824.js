/**
 * Generated Tool: searchTool_0824
 * Domain: Search
 * ID: 0824
 */
exports.searchTool_0824 = async (notionClient, params = {}) => {
  try {
    const response = await notionClient.search(params);
    return response;
  } catch (error) {
    console.error('Error in searchTool_0824:', error);
    throw error;
  }
};
