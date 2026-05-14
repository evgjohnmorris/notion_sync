/**
 * Generated Tool: searchTool_0677
 * Domain: Search
 * ID: 0677
 */
exports.searchTool_0677 = async (notionClient, params = {}) => {
  try {
    const response = await notionClient.search(params);
    return response;
  } catch (error) {
    console.error('Error in searchTool_0677:', error);
    throw error;
  }
};
