/**
 * Generated Tool: searchTool_0843
 * Domain: Search
 * ID: 0843
 */
exports.searchTool_0843 = async (notionClient, params = {}) => {
  try {
    const response = await notionClient.search(params);
    return response;
  } catch (error) {
    console.error('Error in searchTool_0843:', error);
    throw error;
  }
};
