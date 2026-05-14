/**
 * Generated Tool: searchTool_0812
 * Domain: Search
 * ID: 0812
 */
exports.searchTool_0812 = async (notionClient, params = {}) => {
  try {
    const response = await notionClient.search(params);
    return response;
  } catch (error) {
    console.error('Error in searchTool_0812:', error);
    throw error;
  }
};
