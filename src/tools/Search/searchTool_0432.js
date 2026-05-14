/**
 * Generated Tool: searchTool_0432
 * Domain: Search
 * ID: 0432
 */
exports.searchTool_0432 = async (notionClient, params = {}) => {
  try {
    const response = await notionClient.search(params);
    return response;
  } catch (error) {
    console.error('Error in searchTool_0432:', error);
    throw error;
  }
};
