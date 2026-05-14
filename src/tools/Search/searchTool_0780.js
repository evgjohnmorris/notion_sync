/**
 * Generated Tool: searchTool_0780
 * Domain: Search
 * ID: 0780
 */
exports.searchTool_0780 = async (notionClient, params = {}) => {
  try {
    const response = await notionClient.search(params);
    return response;
  } catch (error) {
    console.error('Error in searchTool_0780:', error);
    throw error;
  }
};
