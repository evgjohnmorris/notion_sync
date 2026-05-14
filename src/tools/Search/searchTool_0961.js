/**
 * Generated Tool: searchTool_0961
 * Domain: Search
 * ID: 0961
 */
exports.searchTool_0961 = async (notionClient, params = {}) => {
  try {
    const response = await notionClient.search(params);
    return response;
  } catch (error) {
    console.error('Error in searchTool_0961:', error);
    throw error;
  }
};
