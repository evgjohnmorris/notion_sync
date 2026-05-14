/**
 * Generated Tool: searchTool_0928
 * Domain: Search
 * ID: 0928
 */
exports.searchTool_0928 = async (notionClient, params = {}) => {
  try {
    const response = await notionClient.search(params);
    return response;
  } catch (error) {
    console.error('Error in searchTool_0928:', error);
    throw error;
  }
};
