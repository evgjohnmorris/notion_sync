/**
 * Generated Tool: searchTool_0341
 * Domain: Search
 * ID: 0341
 */
exports.searchTool_0341 = async (notionClient, params = {}) => {
  try {
    const response = await notionClient.search(params);
    return response;
  } catch (error) {
    console.error('Error in searchTool_0341:', error);
    throw error;
  }
};
