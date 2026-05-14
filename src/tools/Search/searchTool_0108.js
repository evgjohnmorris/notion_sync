/**
 * Generated Tool: searchTool_0108
 * Domain: Search
 * ID: 0108
 */
exports.searchTool_0108 = async (notionClient, params = {}) => {
  try {
    const response = await notionClient.search(params);
    return response;
  } catch (error) {
    console.error('Error in searchTool_0108:', error);
    throw error;
  }
};
