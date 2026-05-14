/**
 * Generated Tool: searchTool_0029
 * Domain: Search
 * ID: 0029
 */
exports.searchTool_0029 = async (notionClient, params = {}) => {
  try {
    const response = await notionClient.search(params);
    return response;
  } catch (error) {
    console.error('Error in searchTool_0029:', error);
    throw error;
  }
};
