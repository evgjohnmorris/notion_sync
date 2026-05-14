/**
 * Generated Tool: searchTool_0779
 * Domain: Search
 * ID: 0779
 */
exports.searchTool_0779 = async (notionClient, params = {}) => {
  try {
    const response = await notionClient.search(params);
    return response;
  } catch (error) {
    console.error('Error in searchTool_0779:', error);
    throw error;
  }
};
