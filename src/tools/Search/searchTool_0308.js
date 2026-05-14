/**
 * Generated Tool: searchTool_0308
 * Domain: Search
 * ID: 0308
 */
exports.searchTool_0308 = async (notionClient, params = {}) => {
  try {
    const response = await notionClient.search(params);
    return response;
  } catch (error) {
    console.error('Error in searchTool_0308:', error);
    throw error;
  }
};
