/**
 * Generated Tool: searchTool_0962
 * Domain: Search
 * ID: 0962
 */
exports.searchTool_0962 = async (notionClient, params = {}) => {
  try {
    const response = await notionClient.search(params);
    return response;
  } catch (error) {
    console.error('Error in searchTool_0962:', error);
    throw error;
  }
};
