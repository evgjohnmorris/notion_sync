/**
 * Generated Tool: searchTool_0345
 * Domain: Search
 * ID: 0345
 */
exports.searchTool_0345 = async (notionClient, params = {}) => {
  try {
    const response = await notionClient.search(params);
    return response;
  } catch (error) {
    console.error('Error in searchTool_0345:', error);
    throw error;
  }
};
