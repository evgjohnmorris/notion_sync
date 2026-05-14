/**
 * Generated Tool: searchTool_0180
 * Domain: Search
 * ID: 0180
 */
exports.searchTool_0180 = async (notionClient, params = {}) => {
  try {
    const response = await notionClient.search(params);
    return response;
  } catch (error) {
    console.error('Error in searchTool_0180:', error);
    throw error;
  }
};
