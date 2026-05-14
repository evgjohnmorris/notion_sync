/**
 * Generated Tool: searchTool_0196
 * Domain: Search
 * ID: 0196
 */
exports.searchTool_0196 = async (notionClient, params = {}) => {
  try {
    const response = await notionClient.search(params);
    return response;
  } catch (error) {
    console.error('Error in searchTool_0196:', error);
    throw error;
  }
};
