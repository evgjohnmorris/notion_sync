/**
 * Generated Tool: searchTool_0083
 * Domain: Search
 * ID: 0083
 */
exports.searchTool_0083 = async (notionClient, params = {}) => {
  try {
    const response = await notionClient.search(params);
    return response;
  } catch (error) {
    console.error('Error in searchTool_0083:', error);
    throw error;
  }
};
