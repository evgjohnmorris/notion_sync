/**
 * Generated Tool: searchTool_0376
 * Domain: Search
 * ID: 0376
 */
exports.searchTool_0376 = async (notionClient, params = {}) => {
  try {
    const response = await notionClient.search(params);
    return response;
  } catch (error) {
    console.error('Error in searchTool_0376:', error);
    throw error;
  }
};
