/**
 * Generated Tool: searchTool_0436
 * Domain: Search
 * ID: 0436
 */
exports.searchTool_0436 = async (notionClient, params = {}) => {
  try {
    const response = await notionClient.search(params);
    return response;
  } catch (error) {
    console.error('Error in searchTool_0436:', error);
    throw error;
  }
};
