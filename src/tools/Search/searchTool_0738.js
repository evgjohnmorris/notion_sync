/**
 * Generated Tool: searchTool_0738
 * Domain: Search
 * ID: 0738
 */
exports.searchTool_0738 = async (notionClient, params = {}) => {
  try {
    const response = await notionClient.search(params);
    return response;
  } catch (error) {
    console.error('Error in searchTool_0738:', error);
    throw error;
  }
};
