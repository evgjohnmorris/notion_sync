/**
 * Generated Tool: searchTool_0404
 * Domain: Search
 * ID: 0404
 */
exports.searchTool_0404 = async (notionClient, params = {}) => {
  try {
    const response = await notionClient.search(params);
    return response;
  } catch (error) {
    console.error('Error in searchTool_0404:', error);
    throw error;
  }
};
