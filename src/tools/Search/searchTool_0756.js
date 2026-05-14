/**
 * Generated Tool: searchTool_0756
 * Domain: Search
 * ID: 0756
 */
exports.searchTool_0756 = async (notionClient, params = {}) => {
  try {
    const response = await notionClient.search(params);
    return response;
  } catch (error) {
    console.error('Error in searchTool_0756:', error);
    throw error;
  }
};
