/**
 * Generated Tool: searchTool_0117
 * Domain: Search
 * ID: 0117
 */
exports.searchTool_0117 = async (notionClient, params = {}) => {
  try {
    const response = await notionClient.search(params);
    return response;
  } catch (error) {
    console.error('Error in searchTool_0117:', error);
    throw error;
  }
};
