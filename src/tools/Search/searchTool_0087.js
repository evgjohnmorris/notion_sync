/**
 * Generated Tool: searchTool_0087
 * Domain: Search
 * ID: 0087
 */
exports.searchTool_0087 = async (notionClient, params = {}) => {
  try {
    const response = await notionClient.search(params);
    return response;
  } catch (error) {
    console.error('Error in searchTool_0087:', error);
    throw error;
  }
};
