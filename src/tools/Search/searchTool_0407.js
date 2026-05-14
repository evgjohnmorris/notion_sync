/**
 * Generated Tool: searchTool_0407
 * Domain: Search
 * ID: 0407
 */
exports.searchTool_0407 = async (notionClient, params = {}) => {
  try {
    const response = await notionClient.search(params);
    return response;
  } catch (error) {
    console.error('Error in searchTool_0407:', error);
    throw error;
  }
};
