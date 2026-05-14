/**
 * Generated Tool: searchTool_0463
 * Domain: Search
 * ID: 0463
 */
exports.searchTool_0463 = async (notionClient, params = {}) => {
  try {
    const response = await notionClient.search(params);
    return response;
  } catch (error) {
    console.error('Error in searchTool_0463:', error);
    throw error;
  }
};
