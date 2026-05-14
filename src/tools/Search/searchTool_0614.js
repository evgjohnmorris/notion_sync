/**
 * Generated Tool: searchTool_0614
 * Domain: Search
 * ID: 0614
 */
exports.searchTool_0614 = async (notionClient, params = {}) => {
  try {
    const response = await notionClient.search(params);
    return response;
  } catch (error) {
    console.error('Error in searchTool_0614:', error);
    throw error;
  }
};
