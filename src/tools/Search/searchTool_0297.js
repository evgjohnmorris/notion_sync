/**
 * Generated Tool: searchTool_0297
 * Domain: Search
 * ID: 0297
 */
exports.searchTool_0297 = async (notionClient, params = {}) => {
  try {
    const response = await notionClient.search(params);
    return response;
  } catch (error) {
    console.error('Error in searchTool_0297:', error);
    throw error;
  }
};
