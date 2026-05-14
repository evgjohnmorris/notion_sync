/**
 * Generated Tool: searchTool_0279
 * Domain: Search
 * ID: 0279
 */
exports.searchTool_0279 = async (notionClient, params = {}) => {
  try {
    const response = await notionClient.search(params);
    return response;
  } catch (error) {
    console.error('Error in searchTool_0279:', error);
    throw error;
  }
};
