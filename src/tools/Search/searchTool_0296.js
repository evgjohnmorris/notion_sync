/**
 * Generated Tool: searchTool_0296
 * Domain: Search
 * ID: 0296
 */
exports.searchTool_0296 = async (notionClient, params = {}) => {
  try {
    const response = await notionClient.search(params);
    return response;
  } catch (error) {
    console.error('Error in searchTool_0296:', error);
    throw error;
  }
};
