/**
 * Generated Tool: searchTool_0827
 * Domain: Search
 * ID: 0827
 */
exports.searchTool_0827 = async (notionClient, params = {}) => {
  try {
    const response = await notionClient.search(params);
    return response;
  } catch (error) {
    console.error('Error in searchTool_0827:', error);
    throw error;
  }
};
