/**
 * Generated Tool: searchTool_0054
 * Domain: Search
 * ID: 0054
 */
exports.searchTool_0054 = async (notionClient, params = {}) => {
  try {
    const response = await notionClient.search(params);
    return response;
  } catch (error) {
    console.error('Error in searchTool_0054:', error);
    throw error;
  }
};
