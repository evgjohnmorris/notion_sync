/**
 * Generated Tool: searchTool_0403
 * Domain: Search
 * ID: 0403
 */
exports.searchTool_0403 = async (notionClient, params = {}) => {
  try {
    const response = await notionClient.search(params);
    return response;
  } catch (error) {
    console.error('Error in searchTool_0403:', error);
    throw error;
  }
};
