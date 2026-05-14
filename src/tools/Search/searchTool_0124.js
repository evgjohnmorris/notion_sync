/**
 * Generated Tool: searchTool_0124
 * Domain: Search
 * ID: 0124
 */
exports.searchTool_0124 = async (notionClient, params = {}) => {
  try {
    const response = await notionClient.search(params);
    return response;
  } catch (error) {
    console.error('Error in searchTool_0124:', error);
    throw error;
  }
};
