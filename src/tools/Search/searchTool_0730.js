/**
 * Generated Tool: searchTool_0730
 * Domain: Search
 * ID: 0730
 */
exports.searchTool_0730 = async (notionClient, params = {}) => {
  try {
    const response = await notionClient.search(params);
    return response;
  } catch (error) {
    console.error('Error in searchTool_0730:', error);
    throw error;
  }
};
