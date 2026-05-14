/**
 * Generated Tool: searchTool_0394
 * Domain: Search
 * ID: 0394
 */
exports.searchTool_0394 = async (notionClient, params = {}) => {
  try {
    const response = await notionClient.search(params);
    return response;
  } catch (error) {
    console.error('Error in searchTool_0394:', error);
    throw error;
  }
};
