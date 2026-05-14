/**
 * Generated Tool: searchTool_0202
 * Domain: Search
 * ID: 0202
 */
exports.searchTool_0202 = async (notionClient, params = {}) => {
  try {
    const response = await notionClient.search(params);
    return response;
  } catch (error) {
    console.error('Error in searchTool_0202:', error);
    throw error;
  }
};
