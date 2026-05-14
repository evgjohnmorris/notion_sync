/**
 * Generated Tool: searchTool_0593
 * Domain: Search
 * ID: 0593
 */
exports.searchTool_0593 = async (notionClient, params = {}) => {
  try {
    const response = await notionClient.search(params);
    return response;
  } catch (error) {
    console.error('Error in searchTool_0593:', error);
    throw error;
  }
};
