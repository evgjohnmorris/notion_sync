/**
 * Generated Tool: searchTool_0443
 * Domain: Search
 * ID: 0443
 */
exports.searchTool_0443 = async (notionClient, params = {}) => {
  try {
    const response = await notionClient.search(params);
    return response;
  } catch (error) {
    console.error('Error in searchTool_0443:', error);
    throw error;
  }
};
