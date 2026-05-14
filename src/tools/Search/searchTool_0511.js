/**
 * Generated Tool: searchTool_0511
 * Domain: Search
 * ID: 0511
 */
exports.searchTool_0511 = async (notionClient, params = {}) => {
  try {
    const response = await notionClient.search(params);
    return response;
  } catch (error) {
    console.error('Error in searchTool_0511:', error);
    throw error;
  }
};
