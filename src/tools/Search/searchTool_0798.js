/**
 * Generated Tool: searchTool_0798
 * Domain: Search
 * ID: 0798
 */
exports.searchTool_0798 = async (notionClient, params = {}) => {
  try {
    const response = await notionClient.search(params);
    return response;
  } catch (error) {
    console.error('Error in searchTool_0798:', error);
    throw error;
  }
};
