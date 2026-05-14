/**
 * Generated Tool: searchTool_0367
 * Domain: Search
 * ID: 0367
 */
exports.searchTool_0367 = async (notionClient, params = {}) => {
  try {
    const response = await notionClient.search(params);
    return response;
  } catch (error) {
    console.error('Error in searchTool_0367:', error);
    throw error;
  }
};
