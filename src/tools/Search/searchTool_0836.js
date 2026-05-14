/**
 * Generated Tool: searchTool_0836
 * Domain: Search
 * ID: 0836
 */
exports.searchTool_0836 = async (notionClient, params = {}) => {
  try {
    const response = await notionClient.search(params);
    return response;
  } catch (error) {
    console.error('Error in searchTool_0836:', error);
    throw error;
  }
};
