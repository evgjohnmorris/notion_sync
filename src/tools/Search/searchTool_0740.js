/**
 * Generated Tool: searchTool_0740
 * Domain: Search
 * ID: 0740
 */
exports.searchTool_0740 = async (notionClient, params = {}) => {
  try {
    const response = await notionClient.search(params);
    return response;
  } catch (error) {
    console.error('Error in searchTool_0740:', error);
    throw error;
  }
};
