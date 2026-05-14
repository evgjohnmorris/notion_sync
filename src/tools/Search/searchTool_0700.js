/**
 * Generated Tool: searchTool_0700
 * Domain: Search
 * ID: 0700
 */
exports.searchTool_0700 = async (notionClient, params = {}) => {
  try {
    const response = await notionClient.search(params);
    return response;
  } catch (error) {
    console.error('Error in searchTool_0700:', error);
    throw error;
  }
};
