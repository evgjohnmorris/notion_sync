/**
 * Generated Tool: searchTool_0444
 * Domain: Search
 * ID: 0444
 */
exports.searchTool_0444 = async (notionClient, params = {}) => {
  try {
    const response = await notionClient.search(params);
    return response;
  } catch (error) {
    console.error('Error in searchTool_0444:', error);
    throw error;
  }
};
