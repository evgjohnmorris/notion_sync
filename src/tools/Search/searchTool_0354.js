/**
 * Generated Tool: searchTool_0354
 * Domain: Search
 * ID: 0354
 */
exports.searchTool_0354 = async (notionClient, params = {}) => {
  try {
    const response = await notionClient.search(params);
    return response;
  } catch (error) {
    console.error('Error in searchTool_0354:', error);
    throw error;
  }
};
