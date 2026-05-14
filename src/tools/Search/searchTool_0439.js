/**
 * Generated Tool: searchTool_0439
 * Domain: Search
 * ID: 0439
 */
exports.searchTool_0439 = async (notionClient, params = {}) => {
  try {
    const response = await notionClient.search(params);
    return response;
  } catch (error) {
    console.error('Error in searchTool_0439:', error);
    throw error;
  }
};
