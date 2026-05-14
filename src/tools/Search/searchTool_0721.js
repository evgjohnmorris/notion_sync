/**
 * Generated Tool: searchTool_0721
 * Domain: Search
 * ID: 0721
 */
exports.searchTool_0721 = async (notionClient, params = {}) => {
  try {
    const response = await notionClient.search(params);
    return response;
  } catch (error) {
    console.error('Error in searchTool_0721:', error);
    throw error;
  }
};
