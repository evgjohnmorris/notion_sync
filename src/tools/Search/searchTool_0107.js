/**
 * Generated Tool: searchTool_0107
 * Domain: Search
 * ID: 0107
 */
exports.searchTool_0107 = async (notionClient, params = {}) => {
  try {
    const response = await notionClient.search(params);
    return response;
  } catch (error) {
    console.error('Error in searchTool_0107:', error);
    throw error;
  }
};
