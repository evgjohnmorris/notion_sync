/**
 * Generated Tool: searchTool_0650
 * Domain: Search
 * ID: 0650
 */
exports.searchTool_0650 = async (notionClient, params = {}) => {
  try {
    const response = await notionClient.search(params);
    return response;
  } catch (error) {
    console.error('Error in searchTool_0650:', error);
    throw error;
  }
};
