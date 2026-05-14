/**
 * Generated Tool: searchTool_0038
 * Domain: Search
 * ID: 0038
 */
exports.searchTool_0038 = async (notionClient, params = {}) => {
  try {
    const response = await notionClient.search(params);
    return response;
  } catch (error) {
    console.error('Error in searchTool_0038:', error);
    throw error;
  }
};
