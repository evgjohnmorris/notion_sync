/**
 * Generated Tool: searchTool_0102
 * Domain: Search
 * ID: 0102
 */
exports.searchTool_0102 = async (notionClient, params = {}) => {
  try {
    const response = await notionClient.search(params);
    return response;
  } catch (error) {
    console.error('Error in searchTool_0102:', error);
    throw error;
  }
};
