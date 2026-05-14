/**
 * Generated Tool: searchTool_0132
 * Domain: Search
 * ID: 0132
 */
exports.searchTool_0132 = async (notionClient, params = {}) => {
  try {
    const response = await notionClient.search(params);
    return response;
  } catch (error) {
    console.error('Error in searchTool_0132:', error);
    throw error;
  }
};
