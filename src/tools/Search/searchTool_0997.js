/**
 * Generated Tool: searchTool_0997
 * Domain: Search
 * ID: 0997
 */
exports.searchTool_0997 = async (notionClient, params = {}) => {
  try {
    const response = await notionClient.search(params);
    return response;
  } catch (error) {
    console.error('Error in searchTool_0997:', error);
    throw error;
  }
};
