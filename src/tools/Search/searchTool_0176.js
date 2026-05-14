/**
 * Generated Tool: searchTool_0176
 * Domain: Search
 * ID: 0176
 */
exports.searchTool_0176 = async (notionClient, params = {}) => {
  try {
    const response = await notionClient.search(params);
    return response;
  } catch (error) {
    console.error('Error in searchTool_0176:', error);
    throw error;
  }
};
