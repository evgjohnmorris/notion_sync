/**
 * Generated Tool: searchTool_0523
 * Domain: Search
 * ID: 0523
 */
exports.searchTool_0523 = async (notionClient, params = {}) => {
  try {
    const response = await notionClient.search(params);
    return response;
  } catch (error) {
    console.error('Error in searchTool_0523:', error);
    throw error;
  }
};
