/**
 * Generated Tool: searchTool_0327
 * Domain: Search
 * ID: 0327
 */
exports.searchTool_0327 = async (notionClient, params = {}) => {
  try {
    const response = await notionClient.search(params);
    return response;
  } catch (error) {
    console.error('Error in searchTool_0327:', error);
    throw error;
  }
};
