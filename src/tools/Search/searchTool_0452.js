/**
 * Generated Tool: searchTool_0452
 * Domain: Search
 * ID: 0452
 */
exports.searchTool_0452 = async (notionClient, params = {}) => {
  try {
    const response = await notionClient.search(params);
    return response;
  } catch (error) {
    console.error('Error in searchTool_0452:', error);
    throw error;
  }
};
