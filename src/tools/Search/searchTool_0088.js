/**
 * Generated Tool: searchTool_0088
 * Domain: Search
 * ID: 0088
 */
exports.searchTool_0088 = async (notionClient, params = {}) => {
  try {
    const response = await notionClient.search(params);
    return response;
  } catch (error) {
    console.error('Error in searchTool_0088:', error);
    throw error;
  }
};
