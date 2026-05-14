/**
 * Generated Tool: searchTool_0539
 * Domain: Search
 * ID: 0539
 */
exports.searchTool_0539 = async (notionClient, params = {}) => {
  try {
    const response = await notionClient.search(params);
    return response;
  } catch (error) {
    console.error('Error in searchTool_0539:', error);
    throw error;
  }
};
