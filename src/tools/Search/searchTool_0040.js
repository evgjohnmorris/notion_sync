/**
 * Generated Tool: searchTool_0040
 * Domain: Search
 * ID: 0040
 */
exports.searchTool_0040 = async (notionClient, params = {}) => {
  try {
    const response = await notionClient.search(params);
    return response;
  } catch (error) {
    console.error('Error in searchTool_0040:', error);
    throw error;
  }
};
