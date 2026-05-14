/**
 * Generated Tool: searchTool_0089
 * Domain: Search
 * ID: 0089
 */
exports.searchTool_0089 = async (notionClient, params = {}) => {
  try {
    const response = await notionClient.search(params);
    return response;
  } catch (error) {
    console.error('Error in searchTool_0089:', error);
    throw error;
  }
};
