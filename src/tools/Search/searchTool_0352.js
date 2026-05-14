/**
 * Generated Tool: searchTool_0352
 * Domain: Search
 * ID: 0352
 */
exports.searchTool_0352 = async (notionClient, params = {}) => {
  try {
    const response = await notionClient.search(params);
    return response;
  } catch (error) {
    console.error('Error in searchTool_0352:', error);
    throw error;
  }
};
