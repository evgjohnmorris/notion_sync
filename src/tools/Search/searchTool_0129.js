/**
 * Generated Tool: searchTool_0129
 * Domain: Search
 * ID: 0129
 */
exports.searchTool_0129 = async (notionClient, params = {}) => {
  try {
    const response = await notionClient.search(params);
    return response;
  } catch (error) {
    console.error('Error in searchTool_0129:', error);
    throw error;
  }
};
