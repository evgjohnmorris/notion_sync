/**
 * Generated Tool: searchTool_0204
 * Domain: Search
 * ID: 0204
 */
exports.searchTool_0204 = async (notionClient, params = {}) => {
  try {
    const response = await notionClient.search(params);
    return response;
  } catch (error) {
    console.error('Error in searchTool_0204:', error);
    throw error;
  }
};
