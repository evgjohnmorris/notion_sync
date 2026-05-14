/**
 * Generated Tool: searchTool_0865
 * Domain: Search
 * ID: 0865
 */
exports.searchTool_0865 = async (notionClient, params = {}) => {
  try {
    const response = await notionClient.search(params);
    return response;
  } catch (error) {
    console.error('Error in searchTool_0865:', error);
    throw error;
  }
};
