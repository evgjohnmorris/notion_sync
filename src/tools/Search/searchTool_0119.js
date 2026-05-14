/**
 * Generated Tool: searchTool_0119
 * Domain: Search
 * ID: 0119
 */
exports.searchTool_0119 = async (notionClient, params = {}) => {
  try {
    const response = await notionClient.search(params);
    return response;
  } catch (error) {
    console.error('Error in searchTool_0119:', error);
    throw error;
  }
};
