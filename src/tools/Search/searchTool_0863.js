/**
 * Generated Tool: searchTool_0863
 * Domain: Search
 * ID: 0863
 */
exports.searchTool_0863 = async (notionClient, params = {}) => {
  try {
    const response = await notionClient.search(params);
    return response;
  } catch (error) {
    console.error('Error in searchTool_0863:', error);
    throw error;
  }
};
