/**
 * Generated Tool: searchTool_0476
 * Domain: Search
 * ID: 0476
 */
exports.searchTool_0476 = async (notionClient, params = {}) => {
  try {
    const response = await notionClient.search(params);
    return response;
  } catch (error) {
    console.error('Error in searchTool_0476:', error);
    throw error;
  }
};
