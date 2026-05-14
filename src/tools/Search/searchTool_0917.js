/**
 * Generated Tool: searchTool_0917
 * Domain: Search
 * ID: 0917
 */
exports.searchTool_0917 = async (notionClient, params = {}) => {
  try {
    const response = await notionClient.search(params);
    return response;
  } catch (error) {
    console.error('Error in searchTool_0917:', error);
    throw error;
  }
};
