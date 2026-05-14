/**
 * Generated Tool: searchTool_0283
 * Domain: Search
 * ID: 0283
 */
exports.searchTool_0283 = async (notionClient, params = {}) => {
  try {
    const response = await notionClient.search(params);
    return response;
  } catch (error) {
    console.error('Error in searchTool_0283:', error);
    throw error;
  }
};
