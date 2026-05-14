/**
 * Generated Tool: searchTool_0157
 * Domain: Search
 * ID: 0157
 */
exports.searchTool_0157 = async (notionClient, params = {}) => {
  try {
    const response = await notionClient.search(params);
    return response;
  } catch (error) {
    console.error('Error in searchTool_0157:', error);
    throw error;
  }
};
