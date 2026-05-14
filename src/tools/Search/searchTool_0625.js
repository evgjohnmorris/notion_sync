/**
 * Generated Tool: searchTool_0625
 * Domain: Search
 * ID: 0625
 */
exports.searchTool_0625 = async (notionClient, params = {}) => {
  try {
    const response = await notionClient.search(params);
    return response;
  } catch (error) {
    console.error('Error in searchTool_0625:', error);
    throw error;
  }
};
