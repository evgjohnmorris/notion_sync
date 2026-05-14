/**
 * Generated Tool: searchTool_0224
 * Domain: Search
 * ID: 0224
 */
exports.searchTool_0224 = async (notionClient, params = {}) => {
  try {
    const response = await notionClient.search(params);
    return response;
  } catch (error) {
    console.error('Error in searchTool_0224:', error);
    throw error;
  }
};
