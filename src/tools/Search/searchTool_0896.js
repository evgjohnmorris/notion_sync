/**
 * Generated Tool: searchTool_0896
 * Domain: Search
 * ID: 0896
 */
exports.searchTool_0896 = async (notionClient, params = {}) => {
  try {
    const response = await notionClient.search(params);
    return response;
  } catch (error) {
    console.error('Error in searchTool_0896:', error);
    throw error;
  }
};
