/**
 * Generated Tool: searchTool_0663
 * Domain: Search
 * ID: 0663
 */
exports.searchTool_0663 = async (notionClient, params = {}) => {
  try {
    const response = await notionClient.search(params);
    return response;
  } catch (error) {
    console.error('Error in searchTool_0663:', error);
    throw error;
  }
};
