/**
 * Generated Tool: searchTool_0690
 * Domain: Search
 * ID: 0690
 */
exports.searchTool_0690 = async (notionClient, params = {}) => {
  try {
    const response = await notionClient.search(params);
    return response;
  } catch (error) {
    console.error('Error in searchTool_0690:', error);
    throw error;
  }
};
