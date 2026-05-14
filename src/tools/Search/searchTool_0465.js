/**
 * Generated Tool: searchTool_0465
 * Domain: Search
 * ID: 0465
 */
exports.searchTool_0465 = async (notionClient, params = {}) => {
  try {
    const response = await notionClient.search(params);
    return response;
  } catch (error) {
    console.error('Error in searchTool_0465:', error);
    throw error;
  }
};
