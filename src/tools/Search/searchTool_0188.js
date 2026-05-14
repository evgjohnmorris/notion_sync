/**
 * Generated Tool: searchTool_0188
 * Domain: Search
 * ID: 0188
 */
exports.searchTool_0188 = async (notionClient, params = {}) => {
  try {
    const response = await notionClient.search(params);
    return response;
  } catch (error) {
    console.error('Error in searchTool_0188:', error);
    throw error;
  }
};
