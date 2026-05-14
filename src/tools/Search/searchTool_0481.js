/**
 * Generated Tool: searchTool_0481
 * Domain: Search
 * ID: 0481
 */
exports.searchTool_0481 = async (notionClient, params = {}) => {
  try {
    const response = await notionClient.search(params);
    return response;
  } catch (error) {
    console.error('Error in searchTool_0481:', error);
    throw error;
  }
};
