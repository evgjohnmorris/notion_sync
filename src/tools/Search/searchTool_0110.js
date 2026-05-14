/**
 * Generated Tool: searchTool_0110
 * Domain: Search
 * ID: 0110
 */
exports.searchTool_0110 = async (notionClient, params = {}) => {
  try {
    const response = await notionClient.search(params);
    return response;
  } catch (error) {
    console.error('Error in searchTool_0110:', error);
    throw error;
  }
};
