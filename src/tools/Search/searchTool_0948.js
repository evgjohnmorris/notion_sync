/**
 * Generated Tool: searchTool_0948
 * Domain: Search
 * ID: 0948
 */
exports.searchTool_0948 = async (notionClient, params = {}) => {
  try {
    const response = await notionClient.search(params);
    return response;
  } catch (error) {
    console.error('Error in searchTool_0948:', error);
    throw error;
  }
};
