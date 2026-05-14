/**
 * Generated Tool: searchTool_0237
 * Domain: Search
 * ID: 0237
 */
exports.searchTool_0237 = async (notionClient, params = {}) => {
  try {
    const response = await notionClient.search(params);
    return response;
  } catch (error) {
    console.error('Error in searchTool_0237:', error);
    throw error;
  }
};
