/**
 * Generated Tool: searchTool_0460
 * Domain: Search
 * ID: 0460
 */
exports.searchTool_0460 = async (notionClient, params = {}) => {
  try {
    const response = await notionClient.search(params);
    return response;
  } catch (error) {
    console.error('Error in searchTool_0460:', error);
    throw error;
  }
};
