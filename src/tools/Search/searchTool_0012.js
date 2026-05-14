/**
 * Generated Tool: searchTool_0012
 * Domain: Search
 * ID: 0012
 */
exports.searchTool_0012 = async (notionClient, params = {}) => {
  try {
    const response = await notionClient.search(params);
    return response;
  } catch (error) {
    console.error('Error in searchTool_0012:', error);
    throw error;
  }
};
