/**
 * Generated Tool: searchTool_0796
 * Domain: Search
 * ID: 0796
 */
exports.searchTool_0796 = async (notionClient, params = {}) => {
  try {
    const response = await notionClient.search(params);
    return response;
  } catch (error) {
    console.error('Error in searchTool_0796:', error);
    throw error;
  }
};
