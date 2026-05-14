/**
 * Generated Tool: searchTool_0987
 * Domain: Search
 * ID: 0987
 */
exports.searchTool_0987 = async (notionClient, params = {}) => {
  try {
    const response = await notionClient.search(params);
    return response;
  } catch (error) {
    console.error('Error in searchTool_0987:', error);
    throw error;
  }
};
