/**
 * Generated Tool: searchTool_0101
 * Domain: Search
 * ID: 0101
 */
exports.searchTool_0101 = async (notionClient, params = {}) => {
  try {
    const response = await notionClient.search(params);
    return response;
  } catch (error) {
    console.error('Error in searchTool_0101:', error);
    throw error;
  }
};
