/**
 * Generated Tool: searchTool_0149
 * Domain: Search
 * ID: 0149
 */
exports.searchTool_0149 = async (notionClient, params = {}) => {
  try {
    const response = await notionClient.search(params);
    return response;
  } catch (error) {
    console.error('Error in searchTool_0149:', error);
    throw error;
  }
};
