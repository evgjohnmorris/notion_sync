/**
 * Generated Tool: searchTool_0860
 * Domain: Search
 * ID: 0860
 */
exports.searchTool_0860 = async (notionClient, params = {}) => {
  try {
    const response = await notionClient.search(params);
    return response;
  } catch (error) {
    console.error('Error in searchTool_0860:', error);
    throw error;
  }
};
