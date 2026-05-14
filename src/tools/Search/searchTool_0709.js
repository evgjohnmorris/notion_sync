/**
 * Generated Tool: searchTool_0709
 * Domain: Search
 * ID: 0709
 */
exports.searchTool_0709 = async (notionClient, params = {}) => {
  try {
    const response = await notionClient.search(params);
    return response;
  } catch (error) {
    console.error('Error in searchTool_0709:', error);
    throw error;
  }
};
