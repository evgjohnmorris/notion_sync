/**
 * Generated Tool: searchTool_0820
 * Domain: Search
 * ID: 0820
 */
exports.searchTool_0820 = async (notionClient, params = {}) => {
  try {
    const response = await notionClient.search(params);
    return response;
  } catch (error) {
    console.error('Error in searchTool_0820:', error);
    throw error;
  }
};
