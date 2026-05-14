/**
 * Generated Tool: searchTool_0492
 * Domain: Search
 * ID: 0492
 */
exports.searchTool_0492 = async (notionClient, params = {}) => {
  try {
    const response = await notionClient.search(params);
    return response;
  } catch (error) {
    console.error('Error in searchTool_0492:', error);
    throw error;
  }
};
