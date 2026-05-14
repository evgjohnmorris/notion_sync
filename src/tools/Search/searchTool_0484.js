/**
 * Generated Tool: searchTool_0484
 * Domain: Search
 * ID: 0484
 */
exports.searchTool_0484 = async (notionClient, params = {}) => {
  try {
    const response = await notionClient.search(params);
    return response;
  } catch (error) {
    console.error('Error in searchTool_0484:', error);
    throw error;
  }
};
