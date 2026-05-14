/**
 * Generated Tool: searchTool_0259
 * Domain: Search
 * ID: 0259
 */
exports.searchTool_0259 = async (notionClient, params = {}) => {
  try {
    const response = await notionClient.search(params);
    return response;
  } catch (error) {
    console.error('Error in searchTool_0259:', error);
    throw error;
  }
};
