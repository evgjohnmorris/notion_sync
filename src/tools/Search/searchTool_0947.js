/**
 * Generated Tool: searchTool_0947
 * Domain: Search
 * ID: 0947
 */
exports.searchTool_0947 = async (notionClient, params = {}) => {
  try {
    const response = await notionClient.search(params);
    return response;
  } catch (error) {
    console.error('Error in searchTool_0947:', error);
    throw error;
  }
};
