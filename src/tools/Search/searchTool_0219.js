/**
 * Generated Tool: searchTool_0219
 * Domain: Search
 * ID: 0219
 */
exports.searchTool_0219 = async (notionClient, params = {}) => {
  try {
    const response = await notionClient.search(params);
    return response;
  } catch (error) {
    console.error('Error in searchTool_0219:', error);
    throw error;
  }
};
