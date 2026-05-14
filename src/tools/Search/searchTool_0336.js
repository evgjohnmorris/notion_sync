/**
 * Generated Tool: searchTool_0336
 * Domain: Search
 * ID: 0336
 */
exports.searchTool_0336 = async (notionClient, params = {}) => {
  try {
    const response = await notionClient.search(params);
    return response;
  } catch (error) {
    console.error('Error in searchTool_0336:', error);
    throw error;
  }
};
