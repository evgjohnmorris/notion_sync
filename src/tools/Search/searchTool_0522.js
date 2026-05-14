/**
 * Generated Tool: searchTool_0522
 * Domain: Search
 * ID: 0522
 */
exports.searchTool_0522 = async (notionClient, params = {}) => {
  try {
    const response = await notionClient.search(params);
    return response;
  } catch (error) {
    console.error('Error in searchTool_0522:', error);
    throw error;
  }
};
