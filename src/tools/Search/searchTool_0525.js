/**
 * Generated Tool: searchTool_0525
 * Domain: Search
 * ID: 0525
 */
exports.searchTool_0525 = async (notionClient, params = {}) => {
  try {
    const response = await notionClient.search(params);
    return response;
  } catch (error) {
    console.error('Error in searchTool_0525:', error);
    throw error;
  }
};
