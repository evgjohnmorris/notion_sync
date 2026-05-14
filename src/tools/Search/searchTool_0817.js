/**
 * Generated Tool: searchTool_0817
 * Domain: Search
 * ID: 0817
 */
exports.searchTool_0817 = async (notionClient, params = {}) => {
  try {
    const response = await notionClient.search(params);
    return response;
  } catch (error) {
    console.error('Error in searchTool_0817:', error);
    throw error;
  }
};
