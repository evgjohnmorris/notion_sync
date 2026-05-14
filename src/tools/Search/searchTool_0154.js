/**
 * Generated Tool: searchTool_0154
 * Domain: Search
 * ID: 0154
 */
exports.searchTool_0154 = async (notionClient, params = {}) => {
  try {
    const response = await notionClient.search(params);
    return response;
  } catch (error) {
    console.error('Error in searchTool_0154:', error);
    throw error;
  }
};
