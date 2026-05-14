/**
 * Generated Tool: searchTool_0072
 * Domain: Search
 * ID: 0072
 */
exports.searchTool_0072 = async (notionClient, params = {}) => {
  try {
    const response = await notionClient.search(params);
    return response;
  } catch (error) {
    console.error('Error in searchTool_0072:', error);
    throw error;
  }
};
