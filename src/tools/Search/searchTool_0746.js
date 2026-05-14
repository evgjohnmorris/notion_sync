/**
 * Generated Tool: searchTool_0746
 * Domain: Search
 * ID: 0746
 */
exports.searchTool_0746 = async (notionClient, params = {}) => {
  try {
    const response = await notionClient.search(params);
    return response;
  } catch (error) {
    console.error('Error in searchTool_0746:', error);
    throw error;
  }
};
