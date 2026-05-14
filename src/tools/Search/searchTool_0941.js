/**
 * Generated Tool: searchTool_0941
 * Domain: Search
 * ID: 0941
 */
exports.searchTool_0941 = async (notionClient, params = {}) => {
  try {
    const response = await notionClient.search(params);
    return response;
  } catch (error) {
    console.error('Error in searchTool_0941:', error);
    throw error;
  }
};
