/**
 * Generated Tool: searchTool_0849
 * Domain: Search
 * ID: 0849
 */
exports.searchTool_0849 = async (notionClient, params = {}) => {
  try {
    const response = await notionClient.search(params);
    return response;
  } catch (error) {
    console.error('Error in searchTool_0849:', error);
    throw error;
  }
};
