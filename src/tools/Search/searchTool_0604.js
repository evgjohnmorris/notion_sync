/**
 * Generated Tool: searchTool_0604
 * Domain: Search
 * ID: 0604
 */
exports.searchTool_0604 = async (notionClient, params = {}) => {
  try {
    const response = await notionClient.search(params);
    return response;
  } catch (error) {
    console.error('Error in searchTool_0604:', error);
    throw error;
  }
};
