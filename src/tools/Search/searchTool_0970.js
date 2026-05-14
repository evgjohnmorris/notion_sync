/**
 * Generated Tool: searchTool_0970
 * Domain: Search
 * ID: 0970
 */
exports.searchTool_0970 = async (notionClient, params = {}) => {
  try {
    const response = await notionClient.search(params);
    return response;
  } catch (error) {
    console.error('Error in searchTool_0970:', error);
    throw error;
  }
};
