/**
 * Generated Tool: searchTool_0787
 * Domain: Search
 * ID: 0787
 */
exports.searchTool_0787 = async (notionClient, params = {}) => {
  try {
    const response = await notionClient.search(params);
    return response;
  } catch (error) {
    console.error('Error in searchTool_0787:', error);
    throw error;
  }
};
