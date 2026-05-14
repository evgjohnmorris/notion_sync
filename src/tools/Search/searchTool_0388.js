/**
 * Generated Tool: searchTool_0388
 * Domain: Search
 * ID: 0388
 */
exports.searchTool_0388 = async (notionClient, params = {}) => {
  try {
    const response = await notionClient.search(params);
    return response;
  } catch (error) {
    console.error('Error in searchTool_0388:', error);
    throw error;
  }
};
