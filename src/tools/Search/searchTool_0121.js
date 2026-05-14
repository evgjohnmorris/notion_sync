/**
 * Generated Tool: searchTool_0121
 * Domain: Search
 * ID: 0121
 */
exports.searchTool_0121 = async (notionClient, params = {}) => {
  try {
    const response = await notionClient.search(params);
    return response;
  } catch (error) {
    console.error('Error in searchTool_0121:', error);
    throw error;
  }
};
