/**
 * Generated Tool: searchTool_0120
 * Domain: Search
 * ID: 0120
 */
exports.searchTool_0120 = async (notionClient, params = {}) => {
  try {
    const response = await notionClient.search(params);
    return response;
  } catch (error) {
    console.error('Error in searchTool_0120:', error);
    throw error;
  }
};
