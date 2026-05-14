/**
 * Generated Tool: searchTool_0231
 * Domain: Search
 * ID: 0231
 */
exports.searchTool_0231 = async (notionClient, params = {}) => {
  try {
    const response = await notionClient.search(params);
    return response;
  } catch (error) {
    console.error('Error in searchTool_0231:', error);
    throw error;
  }
};
