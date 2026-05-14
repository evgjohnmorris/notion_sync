/**
 * Generated Tool: searchTool_0258
 * Domain: Search
 * ID: 0258
 */
exports.searchTool_0258 = async (notionClient, params = {}) => {
  try {
    const response = await notionClient.search(params);
    return response;
  } catch (error) {
    console.error('Error in searchTool_0258:', error);
    throw error;
  }
};
