/**
 * Generated Tool: searchTool_0902
 * Domain: Search
 * ID: 0902
 */
exports.searchTool_0902 = async (notionClient, params = {}) => {
  try {
    const response = await notionClient.search(params);
    return response;
  } catch (error) {
    console.error('Error in searchTool_0902:', error);
    throw error;
  }
};
