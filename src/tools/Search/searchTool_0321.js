/**
 * Generated Tool: searchTool_0321
 * Domain: Search
 * ID: 0321
 */
exports.searchTool_0321 = async (notionClient, params = {}) => {
  try {
    const response = await notionClient.search(params);
    return response;
  } catch (error) {
    console.error('Error in searchTool_0321:', error);
    throw error;
  }
};
