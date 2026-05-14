/**
 * Generated Tool: searchTool_0503
 * Domain: Search
 * ID: 0503
 */
exports.searchTool_0503 = async (notionClient, params = {}) => {
  try {
    const response = await notionClient.search(params);
    return response;
  } catch (error) {
    console.error('Error in searchTool_0503:', error);
    throw error;
  }
};
