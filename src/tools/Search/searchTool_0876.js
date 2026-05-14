/**
 * Generated Tool: searchTool_0876
 * Domain: Search
 * ID: 0876
 */
exports.searchTool_0876 = async (notionClient, params = {}) => {
  try {
    const response = await notionClient.search(params);
    return response;
  } catch (error) {
    console.error('Error in searchTool_0876:', error);
    throw error;
  }
};
