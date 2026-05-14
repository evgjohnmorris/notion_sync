/**
 * Generated Tool: searchTool_0791
 * Domain: Search
 * ID: 0791
 */
exports.searchTool_0791 = async (notionClient, params = {}) => {
  try {
    const response = await notionClient.search(params);
    return response;
  } catch (error) {
    console.error('Error in searchTool_0791:', error);
    throw error;
  }
};
