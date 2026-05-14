/**
 * Generated Tool: searchTool_0252
 * Domain: Search
 * ID: 0252
 */
exports.searchTool_0252 = async (notionClient, params = {}) => {
  try {
    const response = await notionClient.search(params);
    return response;
  } catch (error) {
    console.error('Error in searchTool_0252:', error);
    throw error;
  }
};
