/**
 * Generated Tool: searchTool_0133
 * Domain: Search
 * ID: 0133
 */
exports.searchTool_0133 = async (notionClient, params = {}) => {
  try {
    const response = await notionClient.search(params);
    return response;
  } catch (error) {
    console.error('Error in searchTool_0133:', error);
    throw error;
  }
};
