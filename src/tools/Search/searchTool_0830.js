/**
 * Generated Tool: searchTool_0830
 * Domain: Search
 * ID: 0830
 */
exports.searchTool_0830 = async (notionClient, params = {}) => {
  try {
    const response = await notionClient.search(params);
    return response;
  } catch (error) {
    console.error('Error in searchTool_0830:', error);
    throw error;
  }
};
