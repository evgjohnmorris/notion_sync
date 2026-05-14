/**
 * Generated Tool: searchTool_0714
 * Domain: Search
 * ID: 0714
 */
exports.searchTool_0714 = async (notionClient, params = {}) => {
  try {
    const response = await notionClient.search(params);
    return response;
  } catch (error) {
    console.error('Error in searchTool_0714:', error);
    throw error;
  }
};
