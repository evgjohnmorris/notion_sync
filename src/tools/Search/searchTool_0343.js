/**
 * Generated Tool: searchTool_0343
 * Domain: Search
 * ID: 0343
 */
exports.searchTool_0343 = async (notionClient, params = {}) => {
  try {
    const response = await notionClient.search(params);
    return response;
  } catch (error) {
    console.error('Error in searchTool_0343:', error);
    throw error;
  }
};
