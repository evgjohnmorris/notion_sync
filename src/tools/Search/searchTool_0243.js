/**
 * Generated Tool: searchTool_0243
 * Domain: Search
 * ID: 0243
 */
exports.searchTool_0243 = async (notionClient, params = {}) => {
  try {
    const response = await notionClient.search(params);
    return response;
  } catch (error) {
    console.error('Error in searchTool_0243:', error);
    throw error;
  }
};
