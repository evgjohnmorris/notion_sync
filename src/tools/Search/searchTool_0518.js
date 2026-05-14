/**
 * Generated Tool: searchTool_0518
 * Domain: Search
 * ID: 0518
 */
exports.searchTool_0518 = async (notionClient, params = {}) => {
  try {
    const response = await notionClient.search(params);
    return response;
  } catch (error) {
    console.error('Error in searchTool_0518:', error);
    throw error;
  }
};
