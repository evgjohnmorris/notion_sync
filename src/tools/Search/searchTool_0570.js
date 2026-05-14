/**
 * Generated Tool: searchTool_0570
 * Domain: Search
 * ID: 0570
 */
exports.searchTool_0570 = async (notionClient, params = {}) => {
  try {
    const response = await notionClient.search(params);
    return response;
  } catch (error) {
    console.error('Error in searchTool_0570:', error);
    throw error;
  }
};
