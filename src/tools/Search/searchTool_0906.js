/**
 * Generated Tool: searchTool_0906
 * Domain: Search
 * ID: 0906
 */
exports.searchTool_0906 = async (notionClient, params = {}) => {
  try {
    const response = await notionClient.search(params);
    return response;
  } catch (error) {
    console.error('Error in searchTool_0906:', error);
    throw error;
  }
};
