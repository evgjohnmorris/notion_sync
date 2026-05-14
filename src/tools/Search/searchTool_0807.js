/**
 * Generated Tool: searchTool_0807
 * Domain: Search
 * ID: 0807
 */
exports.searchTool_0807 = async (notionClient, params = {}) => {
  try {
    const response = await notionClient.search(params);
    return response;
  } catch (error) {
    console.error('Error in searchTool_0807:', error);
    throw error;
  }
};
