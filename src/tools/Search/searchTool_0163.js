/**
 * Generated Tool: searchTool_0163
 * Domain: Search
 * ID: 0163
 */
exports.searchTool_0163 = async (notionClient, params = {}) => {
  try {
    const response = await notionClient.search(params);
    return response;
  } catch (error) {
    console.error('Error in searchTool_0163:', error);
    throw error;
  }
};
