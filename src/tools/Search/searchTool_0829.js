/**
 * Generated Tool: searchTool_0829
 * Domain: Search
 * ID: 0829
 */
exports.searchTool_0829 = async (notionClient, params = {}) => {
  try {
    const response = await notionClient.search(params);
    return response;
  } catch (error) {
    console.error('Error in searchTool_0829:', error);
    throw error;
  }
};
