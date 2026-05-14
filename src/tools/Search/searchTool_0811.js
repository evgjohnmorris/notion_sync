/**
 * Generated Tool: searchTool_0811
 * Domain: Search
 * ID: 0811
 */
exports.searchTool_0811 = async (notionClient, params = {}) => {
  try {
    const response = await notionClient.search(params);
    return response;
  } catch (error) {
    console.error('Error in searchTool_0811:', error);
    throw error;
  }
};
