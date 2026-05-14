/**
 * Generated Tool: searchTool_0647
 * Domain: Search
 * ID: 0647
 */
exports.searchTool_0647 = async (notionClient, params = {}) => {
  try {
    const response = await notionClient.search(params);
    return response;
  } catch (error) {
    console.error('Error in searchTool_0647:', error);
    throw error;
  }
};
