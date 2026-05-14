/**
 * Generated Tool: searchTool_0090
 * Domain: Search
 * ID: 0090
 */
exports.searchTool_0090 = async (notionClient, params = {}) => {
  try {
    const response = await notionClient.search(params);
    return response;
  } catch (error) {
    console.error('Error in searchTool_0090:', error);
    throw error;
  }
};
