/**
 * Generated Tool: searchTool_0291
 * Domain: Search
 * ID: 0291
 */
exports.searchTool_0291 = async (notionClient, params = {}) => {
  try {
    const response = await notionClient.search(params);
    return response;
  } catch (error) {
    console.error('Error in searchTool_0291:', error);
    throw error;
  }
};
