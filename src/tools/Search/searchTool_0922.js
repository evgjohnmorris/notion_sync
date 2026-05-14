/**
 * Generated Tool: searchTool_0922
 * Domain: Search
 * ID: 0922
 */
exports.searchTool_0922 = async (notionClient, params = {}) => {
  try {
    const response = await notionClient.search(params);
    return response;
  } catch (error) {
    console.error('Error in searchTool_0922:', error);
    throw error;
  }
};
