/**
 * Generated Tool: searchTool_0338
 * Domain: Search
 * ID: 0338
 */
exports.searchTool_0338 = async (notionClient, params = {}) => {
  try {
    const response = await notionClient.search(params);
    return response;
  } catch (error) {
    console.error('Error in searchTool_0338:', error);
    throw error;
  }
};
