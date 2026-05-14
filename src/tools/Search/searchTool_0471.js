/**
 * Generated Tool: searchTool_0471
 * Domain: Search
 * ID: 0471
 */
exports.searchTool_0471 = async (notionClient, params = {}) => {
  try {
    const response = await notionClient.search(params);
    return response;
  } catch (error) {
    console.error('Error in searchTool_0471:', error);
    throw error;
  }
};
