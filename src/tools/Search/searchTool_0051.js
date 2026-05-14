/**
 * Generated Tool: searchTool_0051
 * Domain: Search
 * ID: 0051
 */
exports.searchTool_0051 = async (notionClient, params = {}) => {
  try {
    const response = await notionClient.search(params);
    return response;
  } catch (error) {
    console.error('Error in searchTool_0051:', error);
    throw error;
  }
};
