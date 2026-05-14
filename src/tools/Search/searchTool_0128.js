/**
 * Generated Tool: searchTool_0128
 * Domain: Search
 * ID: 0128
 */
exports.searchTool_0128 = async (notionClient, params = {}) => {
  try {
    const response = await notionClient.search(params);
    return response;
  } catch (error) {
    console.error('Error in searchTool_0128:', error);
    throw error;
  }
};
