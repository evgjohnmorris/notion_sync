/**
 * Generated Tool: searchTool_0590
 * Domain: Search
 * ID: 0590
 */
exports.searchTool_0590 = async (notionClient, params = {}) => {
  try {
    const response = await notionClient.search(params);
    return response;
  } catch (error) {
    console.error('Error in searchTool_0590:', error);
    throw error;
  }
};
