/**
 * Generated Tool: searchTool_0303
 * Domain: Search
 * ID: 0303
 */
exports.searchTool_0303 = async (notionClient, params = {}) => {
  try {
    const response = await notionClient.search(params);
    return response;
  } catch (error) {
    console.error('Error in searchTool_0303:', error);
    throw error;
  }
};
