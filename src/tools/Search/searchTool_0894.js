/**
 * Generated Tool: searchTool_0894
 * Domain: Search
 * ID: 0894
 */
exports.searchTool_0894 = async (notionClient, params = {}) => {
  try {
    const response = await notionClient.search(params);
    return response;
  } catch (error) {
    console.error('Error in searchTool_0894:', error);
    throw error;
  }
};
