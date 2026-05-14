/**
 * Generated Tool: searchTool_0381
 * Domain: Search
 * ID: 0381
 */
exports.searchTool_0381 = async (notionClient, params = {}) => {
  try {
    const response = await notionClient.search(params);
    return response;
  } catch (error) {
    console.error('Error in searchTool_0381:', error);
    throw error;
  }
};
