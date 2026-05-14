/**
 * Generated Tool: searchTool_0429
 * Domain: Search
 * ID: 0429
 */
exports.searchTool_0429 = async (notionClient, params = {}) => {
  try {
    const response = await notionClient.search(params);
    return response;
  } catch (error) {
    console.error('Error in searchTool_0429:', error);
    throw error;
  }
};
