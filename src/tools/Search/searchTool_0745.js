/**
 * Generated Tool: searchTool_0745
 * Domain: Search
 * ID: 0745
 */
exports.searchTool_0745 = async (notionClient, params = {}) => {
  try {
    const response = await notionClient.search(params);
    return response;
  } catch (error) {
    console.error('Error in searchTool_0745:', error);
    throw error;
  }
};
