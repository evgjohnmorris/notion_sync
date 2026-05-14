/**
 * Generated Tool: searchTool_0929
 * Domain: Search
 * ID: 0929
 */
exports.searchTool_0929 = async (notionClient, params = {}) => {
  try {
    const response = await notionClient.search(params);
    return response;
  } catch (error) {
    console.error('Error in searchTool_0929:', error);
    throw error;
  }
};
