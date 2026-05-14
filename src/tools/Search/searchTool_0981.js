/**
 * Generated Tool: searchTool_0981
 * Domain: Search
 * ID: 0981
 */
exports.searchTool_0981 = async (notionClient, params = {}) => {
  try {
    const response = await notionClient.search(params);
    return response;
  } catch (error) {
    console.error('Error in searchTool_0981:', error);
    throw error;
  }
};
