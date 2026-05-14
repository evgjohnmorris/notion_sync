/**
 * Generated Tool: searchTool_0795
 * Domain: Search
 * ID: 0795
 */
exports.searchTool_0795 = async (notionClient, params = {}) => {
  try {
    const response = await notionClient.search(params);
    return response;
  } catch (error) {
    console.error('Error in searchTool_0795:', error);
    throw error;
  }
};
