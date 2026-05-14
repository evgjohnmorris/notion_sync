/**
 * Generated Tool: searchTool_0473
 * Domain: Search
 * ID: 0473
 */
exports.searchTool_0473 = async (notionClient, params = {}) => {
  try {
    const response = await notionClient.search(params);
    return response;
  } catch (error) {
    console.error('Error in searchTool_0473:', error);
    throw error;
  }
};
