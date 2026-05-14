/**
 * Generated Tool: searchTool_0784
 * Domain: Search
 * ID: 0784
 */
exports.searchTool_0784 = async (notionClient, params = {}) => {
  try {
    const response = await notionClient.search(params);
    return response;
  } catch (error) {
    console.error('Error in searchTool_0784:', error);
    throw error;
  }
};
