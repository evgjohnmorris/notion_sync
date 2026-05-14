/**
 * Generated Tool: searchTool_0217
 * Domain: Search
 * ID: 0217
 */
exports.searchTool_0217 = async (notionClient, params = {}) => {
  try {
    const response = await notionClient.search(params);
    return response;
  } catch (error) {
    console.error('Error in searchTool_0217:', error);
    throw error;
  }
};
