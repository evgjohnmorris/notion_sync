/**
 * Generated Tool: searchTool_0958
 * Domain: Search
 * ID: 0958
 */
exports.searchTool_0958 = async (notionClient, params = {}) => {
  try {
    const response = await notionClient.search(params);
    return response;
  } catch (error) {
    console.error('Error in searchTool_0958:', error);
    throw error;
  }
};
