/**
 * Generated Tool: searchTool_0194
 * Domain: Search
 * ID: 0194
 */
exports.searchTool_0194 = async (notionClient, params = {}) => {
  try {
    const response = await notionClient.search(params);
    return response;
  } catch (error) {
    console.error('Error in searchTool_0194:', error);
    throw error;
  }
};
