/**
 * Generated Tool: searchTool_0881
 * Domain: Search
 * ID: 0881
 */
exports.searchTool_0881 = async (notionClient, params = {}) => {
  try {
    const response = await notionClient.search(params);
    return response;
  } catch (error) {
    console.error('Error in searchTool_0881:', error);
    throw error;
  }
};
