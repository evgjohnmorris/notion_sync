/**
 * Generated Tool: searchTool_0598
 * Domain: Search
 * ID: 0598
 */
exports.searchTool_0598 = async (notionClient, params = {}) => {
  try {
    const response = await notionClient.search(params);
    return response;
  } catch (error) {
    console.error('Error in searchTool_0598:', error);
    throw error;
  }
};
