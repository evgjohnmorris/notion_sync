/**
 * Generated Tool: searchTool_0717
 * Domain: Search
 * ID: 0717
 */
exports.searchTool_0717 = async (notionClient, params = {}) => {
  try {
    const response = await notionClient.search(params);
    return response;
  } catch (error) {
    console.error('Error in searchTool_0717:', error);
    throw error;
  }
};
