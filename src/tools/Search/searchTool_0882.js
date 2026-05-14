/**
 * Generated Tool: searchTool_0882
 * Domain: Search
 * ID: 0882
 */
exports.searchTool_0882 = async (notionClient, params = {}) => {
  try {
    const response = await notionClient.search(params);
    return response;
  } catch (error) {
    console.error('Error in searchTool_0882:', error);
    throw error;
  }
};
