/**
 * Generated Tool: searchTool_0477
 * Domain: Search
 * ID: 0477
 */
exports.searchTool_0477 = async (notionClient, params = {}) => {
  try {
    const response = await notionClient.search(params);
    return response;
  } catch (error) {
    console.error('Error in searchTool_0477:', error);
    throw error;
  }
};
