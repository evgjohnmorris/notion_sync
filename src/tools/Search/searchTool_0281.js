/**
 * Generated Tool: searchTool_0281
 * Domain: Search
 * ID: 0281
 */
exports.searchTool_0281 = async (notionClient, params = {}) => {
  try {
    const response = await notionClient.search(params);
    return response;
  } catch (error) {
    console.error('Error in searchTool_0281:', error);
    throw error;
  }
};
