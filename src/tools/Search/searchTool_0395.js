/**
 * Generated Tool: searchTool_0395
 * Domain: Search
 * ID: 0395
 */
exports.searchTool_0395 = async (notionClient, params = {}) => {
  try {
    const response = await notionClient.search(params);
    return response;
  } catch (error) {
    console.error('Error in searchTool_0395:', error);
    throw error;
  }
};
