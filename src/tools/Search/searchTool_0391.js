/**
 * Generated Tool: searchTool_0391
 * Domain: Search
 * ID: 0391
 */
exports.searchTool_0391 = async (notionClient, params = {}) => {
  try {
    const response = await notionClient.search(params);
    return response;
  } catch (error) {
    console.error('Error in searchTool_0391:', error);
    throw error;
  }
};
