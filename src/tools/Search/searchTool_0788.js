/**
 * Generated Tool: searchTool_0788
 * Domain: Search
 * ID: 0788
 */
exports.searchTool_0788 = async (notionClient, params = {}) => {
  try {
    const response = await notionClient.search(params);
    return response;
  } catch (error) {
    console.error('Error in searchTool_0788:', error);
    throw error;
  }
};
