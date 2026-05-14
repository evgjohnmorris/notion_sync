/**
 * Generated Tool: searchTool_0317
 * Domain: Search
 * ID: 0317
 */
exports.searchTool_0317 = async (notionClient, params = {}) => {
  try {
    const response = await notionClient.search(params);
    return response;
  } catch (error) {
    console.error('Error in searchTool_0317:', error);
    throw error;
  }
};
