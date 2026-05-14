/**
 * Generated Tool: searchTool_0761
 * Domain: Search
 * ID: 0761
 */
exports.searchTool_0761 = async (notionClient, params = {}) => {
  try {
    const response = await notionClient.search(params);
    return response;
  } catch (error) {
    console.error('Error in searchTool_0761:', error);
    throw error;
  }
};
