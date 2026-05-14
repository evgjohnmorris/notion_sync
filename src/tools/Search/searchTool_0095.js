/**
 * Generated Tool: searchTool_0095
 * Domain: Search
 * ID: 0095
 */
exports.searchTool_0095 = async (notionClient, params = {}) => {
  try {
    const response = await notionClient.search(params);
    return response;
  } catch (error) {
    console.error('Error in searchTool_0095:', error);
    throw error;
  }
};
