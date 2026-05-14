/**
 * Generated Tool: searchTool_0983
 * Domain: Search
 * ID: 0983
 */
exports.searchTool_0983 = async (notionClient, params = {}) => {
  try {
    const response = await notionClient.search(params);
    return response;
  } catch (error) {
    console.error('Error in searchTool_0983:', error);
    throw error;
  }
};
