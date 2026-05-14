/**
 * Generated Tool: searchTool_0422
 * Domain: Search
 * ID: 0422
 */
exports.searchTool_0422 = async (notionClient, params = {}) => {
  try {
    const response = await notionClient.search(params);
    return response;
  } catch (error) {
    console.error('Error in searchTool_0422:', error);
    throw error;
  }
};
