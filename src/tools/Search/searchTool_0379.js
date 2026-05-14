/**
 * Generated Tool: searchTool_0379
 * Domain: Search
 * ID: 0379
 */
exports.searchTool_0379 = async (notionClient, params = {}) => {
  try {
    const response = await notionClient.search(params);
    return response;
  } catch (error) {
    console.error('Error in searchTool_0379:', error);
    throw error;
  }
};
