/**
 * Generated Tool: searchTool_0200
 * Domain: Search
 * ID: 0200
 */
exports.searchTool_0200 = async (notionClient, params = {}) => {
  try {
    const response = await notionClient.search(params);
    return response;
  } catch (error) {
    console.error('Error in searchTool_0200:', error);
    throw error;
  }
};
