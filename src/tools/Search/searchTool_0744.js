/**
 * Generated Tool: searchTool_0744
 * Domain: Search
 * ID: 0744
 */
exports.searchTool_0744 = async (notionClient, params = {}) => {
  try {
    const response = await notionClient.search(params);
    return response;
  } catch (error) {
    console.error('Error in searchTool_0744:', error);
    throw error;
  }
};
