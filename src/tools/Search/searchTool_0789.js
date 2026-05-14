/**
 * Generated Tool: searchTool_0789
 * Domain: Search
 * ID: 0789
 */
exports.searchTool_0789 = async (notionClient, params = {}) => {
  try {
    const response = await notionClient.search(params);
    return response;
  } catch (error) {
    console.error('Error in searchTool_0789:', error);
    throw error;
  }
};
