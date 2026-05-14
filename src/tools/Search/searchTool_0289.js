/**
 * Generated Tool: searchTool_0289
 * Domain: Search
 * ID: 0289
 */
exports.searchTool_0289 = async (notionClient, params = {}) => {
  try {
    const response = await notionClient.search(params);
    return response;
  } catch (error) {
    console.error('Error in searchTool_0289:', error);
    throw error;
  }
};
