/**
 * Generated Tool: searchTool_0467
 * Domain: Search
 * ID: 0467
 */
exports.searchTool_0467 = async (notionClient, params = {}) => {
  try {
    const response = await notionClient.search(params);
    return response;
  } catch (error) {
    console.error('Error in searchTool_0467:', error);
    throw error;
  }
};
