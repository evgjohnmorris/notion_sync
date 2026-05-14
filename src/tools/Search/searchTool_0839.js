/**
 * Generated Tool: searchTool_0839
 * Domain: Search
 * ID: 0839
 */
exports.searchTool_0839 = async (notionClient, params = {}) => {
  try {
    const response = await notionClient.search(params);
    return response;
  } catch (error) {
    console.error('Error in searchTool_0839:', error);
    throw error;
  }
};
