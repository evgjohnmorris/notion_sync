/**
 * Generated Tool: searchTool_0781
 * Domain: Search
 * ID: 0781
 */
exports.searchTool_0781 = async (notionClient, params = {}) => {
  try {
    const response = await notionClient.search(params);
    return response;
  } catch (error) {
    console.error('Error in searchTool_0781:', error);
    throw error;
  }
};
