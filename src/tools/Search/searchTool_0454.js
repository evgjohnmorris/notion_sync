/**
 * Generated Tool: searchTool_0454
 * Domain: Search
 * ID: 0454
 */
exports.searchTool_0454 = async (notionClient, params = {}) => {
  try {
    const response = await notionClient.search(params);
    return response;
  } catch (error) {
    console.error('Error in searchTool_0454:', error);
    throw error;
  }
};
