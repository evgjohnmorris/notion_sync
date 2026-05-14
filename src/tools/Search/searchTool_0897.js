/**
 * Generated Tool: searchTool_0897
 * Domain: Search
 * ID: 0897
 */
exports.searchTool_0897 = async (notionClient, params = {}) => {
  try {
    const response = await notionClient.search(params);
    return response;
  } catch (error) {
    console.error('Error in searchTool_0897:', error);
    throw error;
  }
};
