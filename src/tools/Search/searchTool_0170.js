/**
 * Generated Tool: searchTool_0170
 * Domain: Search
 * ID: 0170
 */
exports.searchTool_0170 = async (notionClient, params = {}) => {
  try {
    const response = await notionClient.search(params);
    return response;
  } catch (error) {
    console.error('Error in searchTool_0170:', error);
    throw error;
  }
};
