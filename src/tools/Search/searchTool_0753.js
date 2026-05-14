/**
 * Generated Tool: searchTool_0753
 * Domain: Search
 * ID: 0753
 */
exports.searchTool_0753 = async (notionClient, params = {}) => {
  try {
    const response = await notionClient.search(params);
    return response;
  } catch (error) {
    console.error('Error in searchTool_0753:', error);
    throw error;
  }
};
