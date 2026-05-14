/**
 * Generated Tool: searchTool_0729
 * Domain: Search
 * ID: 0729
 */
exports.searchTool_0729 = async (notionClient, params = {}) => {
  try {
    const response = await notionClient.search(params);
    return response;
  } catch (error) {
    console.error('Error in searchTool_0729:', error);
    throw error;
  }
};
