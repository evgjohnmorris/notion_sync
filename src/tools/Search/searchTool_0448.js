/**
 * Generated Tool: searchTool_0448
 * Domain: Search
 * ID: 0448
 */
exports.searchTool_0448 = async (notionClient, params = {}) => {
  try {
    const response = await notionClient.search(params);
    return response;
  } catch (error) {
    console.error('Error in searchTool_0448:', error);
    throw error;
  }
};
