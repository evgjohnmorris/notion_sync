/**
 * Generated Tool: searchTool_0469
 * Domain: Search
 * ID: 0469
 */
exports.searchTool_0469 = async (notionClient, params = {}) => {
  try {
    const response = await notionClient.search(params);
    return response;
  } catch (error) {
    console.error('Error in searchTool_0469:', error);
    throw error;
  }
};
