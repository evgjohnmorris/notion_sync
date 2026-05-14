/**
 * Generated Tool: searchTool_0030
 * Domain: Search
 * ID: 0030
 */
exports.searchTool_0030 = async (notionClient, params = {}) => {
  try {
    const response = await notionClient.search(params);
    return response;
  } catch (error) {
    console.error('Error in searchTool_0030:', error);
    throw error;
  }
};
