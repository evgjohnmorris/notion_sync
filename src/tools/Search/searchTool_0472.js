/**
 * Generated Tool: searchTool_0472
 * Domain: Search
 * ID: 0472
 */
exports.searchTool_0472 = async (notionClient, params = {}) => {
  try {
    const response = await notionClient.search(params);
    return response;
  } catch (error) {
    console.error('Error in searchTool_0472:', error);
    throw error;
  }
};
