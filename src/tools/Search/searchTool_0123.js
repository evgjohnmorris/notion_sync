/**
 * Generated Tool: searchTool_0123
 * Domain: Search
 * ID: 0123
 */
exports.searchTool_0123 = async (notionClient, params = {}) => {
  try {
    const response = await notionClient.search(params);
    return response;
  } catch (error) {
    console.error('Error in searchTool_0123:', error);
    throw error;
  }
};
