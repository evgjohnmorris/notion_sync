/**
 * Generated Tool: searchTool_0624
 * Domain: Search
 * ID: 0624
 */
exports.searchTool_0624 = async (notionClient, params = {}) => {
  try {
    const response = await notionClient.search(params);
    return response;
  } catch (error) {
    console.error('Error in searchTool_0624:', error);
    throw error;
  }
};
