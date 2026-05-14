/**
 * Generated Tool: searchTool_0790
 * Domain: Search
 * ID: 0790
 */
exports.searchTool_0790 = async (notionClient, params = {}) => {
  try {
    const response = await notionClient.search(params);
    return response;
  } catch (error) {
    console.error('Error in searchTool_0790:', error);
    throw error;
  }
};
