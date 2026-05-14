/**
 * Generated Tool: searchTool_0541
 * Domain: Search
 * ID: 0541
 */
exports.searchTool_0541 = async (notionClient, params = {}) => {
  try {
    const response = await notionClient.search(params);
    return response;
  } catch (error) {
    console.error('Error in searchTool_0541:', error);
    throw error;
  }
};
