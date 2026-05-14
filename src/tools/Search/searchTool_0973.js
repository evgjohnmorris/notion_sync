/**
 * Generated Tool: searchTool_0973
 * Domain: Search
 * ID: 0973
 */
exports.searchTool_0973 = async (notionClient, params = {}) => {
  try {
    const response = await notionClient.search(params);
    return response;
  } catch (error) {
    console.error('Error in searchTool_0973:', error);
    throw error;
  }
};
