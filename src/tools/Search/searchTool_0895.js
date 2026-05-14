/**
 * Generated Tool: searchTool_0895
 * Domain: Search
 * ID: 0895
 */
exports.searchTool_0895 = async (notionClient, params = {}) => {
  try {
    const response = await notionClient.search(params);
    return response;
  } catch (error) {
    console.error('Error in searchTool_0895:', error);
    throw error;
  }
};
