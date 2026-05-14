/**
 * Generated Tool: searchTool_0875
 * Domain: Search
 * ID: 0875
 */
exports.searchTool_0875 = async (notionClient, params = {}) => {
  try {
    const response = await notionClient.search(params);
    return response;
  } catch (error) {
    console.error('Error in searchTool_0875:', error);
    throw error;
  }
};
