/**
 * Generated Tool: searchTool_0357
 * Domain: Search
 * ID: 0357
 */
exports.searchTool_0357 = async (notionClient, params = {}) => {
  try {
    const response = await notionClient.search(params);
    return response;
  } catch (error) {
    console.error('Error in searchTool_0357:', error);
    throw error;
  }
};
