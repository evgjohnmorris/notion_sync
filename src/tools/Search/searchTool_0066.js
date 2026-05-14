/**
 * Generated Tool: searchTool_0066
 * Domain: Search
 * ID: 0066
 */
exports.searchTool_0066 = async (notionClient, params = {}) => {
  try {
    const response = await notionClient.search(params);
    return response;
  } catch (error) {
    console.error('Error in searchTool_0066:', error);
    throw error;
  }
};
