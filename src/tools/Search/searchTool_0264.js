/**
 * Generated Tool: searchTool_0264
 * Domain: Search
 * ID: 0264
 */
exports.searchTool_0264 = async (notionClient, params = {}) => {
  try {
    const response = await notionClient.search(params);
    return response;
  } catch (error) {
    console.error('Error in searchTool_0264:', error);
    throw error;
  }
};
