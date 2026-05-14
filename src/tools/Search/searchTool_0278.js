/**
 * Generated Tool: searchTool_0278
 * Domain: Search
 * ID: 0278
 */
exports.searchTool_0278 = async (notionClient, params = {}) => {
  try {
    const response = await notionClient.search(params);
    return response;
  } catch (error) {
    console.error('Error in searchTool_0278:', error);
    throw error;
  }
};
