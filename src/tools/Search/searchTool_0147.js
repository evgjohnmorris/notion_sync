/**
 * Generated Tool: searchTool_0147
 * Domain: Search
 * ID: 0147
 */
exports.searchTool_0147 = async (notionClient, params = {}) => {
  try {
    const response = await notionClient.search(params);
    return response;
  } catch (error) {
    console.error('Error in searchTool_0147:', error);
    throw error;
  }
};
