/**
 * Generated Tool: searchTool_0979
 * Domain: Search
 * ID: 0979
 */
exports.searchTool_0979 = async (notionClient, params = {}) => {
  try {
    const response = await notionClient.search(params);
    return response;
  } catch (error) {
    console.error('Error in searchTool_0979:', error);
    throw error;
  }
};
