/**
 * Generated Tool: searchTool_0466
 * Domain: Search
 * ID: 0466
 */
exports.searchTool_0466 = async (notionClient, params = {}) => {
  try {
    const response = await notionClient.search(params);
    return response;
  } catch (error) {
    console.error('Error in searchTool_0466:', error);
    throw error;
  }
};
