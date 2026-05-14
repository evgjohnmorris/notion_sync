/**
 * Generated Tool: searchTool_0389
 * Domain: Search
 * ID: 0389
 */
exports.searchTool_0389 = async (notionClient, params = {}) => {
  try {
    const response = await notionClient.search(params);
    return response;
  } catch (error) {
    console.error('Error in searchTool_0389:', error);
    throw error;
  }
};
