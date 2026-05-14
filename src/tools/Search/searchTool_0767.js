/**
 * Generated Tool: searchTool_0767
 * Domain: Search
 * ID: 0767
 */
exports.searchTool_0767 = async (notionClient, params = {}) => {
  try {
    const response = await notionClient.search(params);
    return response;
  } catch (error) {
    console.error('Error in searchTool_0767:', error);
    throw error;
  }
};
