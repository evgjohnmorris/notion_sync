/**
 * Generated Tool: searchTool_0322
 * Domain: Search
 * ID: 0322
 */
exports.searchTool_0322 = async (notionClient, params = {}) => {
  try {
    const response = await notionClient.search(params);
    return response;
  } catch (error) {
    console.error('Error in searchTool_0322:', error);
    throw error;
  }
};
