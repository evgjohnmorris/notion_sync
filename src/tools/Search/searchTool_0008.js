/**
 * Generated Tool: searchTool_0008
 * Domain: Search
 * ID: 0008
 */
exports.searchTool_0008 = async (notionClient, params = {}) => {
  try {
    const response = await notionClient.search(params);
    return response;
  } catch (error) {
    console.error('Error in searchTool_0008:', error);
    throw error;
  }
};
