/**
 * Generated Tool: searchTool_0320
 * Domain: Search
 * ID: 0320
 */
exports.searchTool_0320 = async (notionClient, params = {}) => {
  try {
    const response = await notionClient.search(params);
    return response;
  } catch (error) {
    console.error('Error in searchTool_0320:', error);
    throw error;
  }
};
