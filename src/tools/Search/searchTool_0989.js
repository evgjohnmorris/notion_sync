/**
 * Generated Tool: searchTool_0989
 * Domain: Search
 * ID: 0989
 */
exports.searchTool_0989 = async (notionClient, params = {}) => {
  try {
    const response = await notionClient.search(params);
    return response;
  } catch (error) {
    console.error('Error in searchTool_0989:', error);
    throw error;
  }
};
