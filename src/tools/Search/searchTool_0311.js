/**
 * Generated Tool: searchTool_0311
 * Domain: Search
 * ID: 0311
 */
exports.searchTool_0311 = async (notionClient, params = {}) => {
  try {
    const response = await notionClient.search(params);
    return response;
  } catch (error) {
    console.error('Error in searchTool_0311:', error);
    throw error;
  }
};
