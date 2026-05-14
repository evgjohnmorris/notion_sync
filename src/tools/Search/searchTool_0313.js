/**
 * Generated Tool: searchTool_0313
 * Domain: Search
 * ID: 0313
 */
exports.searchTool_0313 = async (notionClient, params = {}) => {
  try {
    const response = await notionClient.search(params);
    return response;
  } catch (error) {
    console.error('Error in searchTool_0313:', error);
    throw error;
  }
};
