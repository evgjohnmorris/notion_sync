/**
 * Generated Tool: searchTool_0377
 * Domain: Search
 * ID: 0377
 */
exports.searchTool_0377 = async (notionClient, params = {}) => {
  try {
    const response = await notionClient.search(params);
    return response;
  } catch (error) {
    console.error('Error in searchTool_0377:', error);
    throw error;
  }
};
