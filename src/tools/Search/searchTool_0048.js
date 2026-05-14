/**
 * Generated Tool: searchTool_0048
 * Domain: Search
 * ID: 0048
 */
exports.searchTool_0048 = async (notionClient, params = {}) => {
  try {
    const response = await notionClient.search(params);
    return response;
  } catch (error) {
    console.error('Error in searchTool_0048:', error);
    throw error;
  }
};
