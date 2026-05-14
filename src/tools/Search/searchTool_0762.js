/**
 * Generated Tool: searchTool_0762
 * Domain: Search
 * ID: 0762
 */
exports.searchTool_0762 = async (notionClient, params = {}) => {
  try {
    const response = await notionClient.search(params);
    return response;
  } catch (error) {
    console.error('Error in searchTool_0762:', error);
    throw error;
  }
};
