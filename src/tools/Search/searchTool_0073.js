/**
 * Generated Tool: searchTool_0073
 * Domain: Search
 * ID: 0073
 */
exports.searchTool_0073 = async (notionClient, params = {}) => {
  try {
    const response = await notionClient.search(params);
    return response;
  } catch (error) {
    console.error('Error in searchTool_0073:', error);
    throw error;
  }
};
