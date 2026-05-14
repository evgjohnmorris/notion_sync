/**
 * Generated Tool: searchTool_0246
 * Domain: Search
 * ID: 0246
 */
exports.searchTool_0246 = async (notionClient, params = {}) => {
  try {
    const response = await notionClient.search(params);
    return response;
  } catch (error) {
    console.error('Error in searchTool_0246:', error);
    throw error;
  }
};
