/**
 * Generated Tool: searchTool_0589
 * Domain: Search
 * ID: 0589
 */
exports.searchTool_0589 = async (notionClient, params = {}) => {
  try {
    const response = await notionClient.search(params);
    return response;
  } catch (error) {
    console.error('Error in searchTool_0589:', error);
    throw error;
  }
};
