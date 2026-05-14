/**
 * Generated Tool: searchTool_0651
 * Domain: Search
 * ID: 0651
 */
exports.searchTool_0651 = async (notionClient, params = {}) => {
  try {
    const response = await notionClient.search(params);
    return response;
  } catch (error) {
    console.error('Error in searchTool_0651:', error);
    throw error;
  }
};
