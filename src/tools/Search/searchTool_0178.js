/**
 * Generated Tool: searchTool_0178
 * Domain: Search
 * ID: 0178
 */
exports.searchTool_0178 = async (notionClient, params = {}) => {
  try {
    const response = await notionClient.search(params);
    return response;
  } catch (error) {
    console.error('Error in searchTool_0178:', error);
    throw error;
  }
};
