/**
 * Generated Tool: searchTool_0943
 * Domain: Search
 * ID: 0943
 */
exports.searchTool_0943 = async (notionClient, params = {}) => {
  try {
    const response = await notionClient.search(params);
    return response;
  } catch (error) {
    console.error('Error in searchTool_0943:', error);
    throw error;
  }
};
