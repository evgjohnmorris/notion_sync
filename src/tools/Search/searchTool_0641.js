/**
 * Generated Tool: searchTool_0641
 * Domain: Search
 * ID: 0641
 */
exports.searchTool_0641 = async (notionClient, params = {}) => {
  try {
    const response = await notionClient.search(params);
    return response;
  } catch (error) {
    console.error('Error in searchTool_0641:', error);
    throw error;
  }
};
