/**
 * Generated Tool: searchTool_0226
 * Domain: Search
 * ID: 0226
 */
exports.searchTool_0226 = async (notionClient, params = {}) => {
  try {
    const response = await notionClient.search(params);
    return response;
  } catch (error) {
    console.error('Error in searchTool_0226:', error);
    throw error;
  }
};
