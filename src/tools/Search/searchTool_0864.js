/**
 * Generated Tool: searchTool_0864
 * Domain: Search
 * ID: 0864
 */
exports.searchTool_0864 = async (notionClient, params = {}) => {
  try {
    const response = await notionClient.search(params);
    return response;
  } catch (error) {
    console.error('Error in searchTool_0864:', error);
    throw error;
  }
};
