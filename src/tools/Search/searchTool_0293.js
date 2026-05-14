/**
 * Generated Tool: searchTool_0293
 * Domain: Search
 * ID: 0293
 */
exports.searchTool_0293 = async (notionClient, params = {}) => {
  try {
    const response = await notionClient.search(params);
    return response;
  } catch (error) {
    console.error('Error in searchTool_0293:', error);
    throw error;
  }
};
