/**
 * Generated Tool: searchTool_0315
 * Domain: Search
 * ID: 0315
 */
exports.searchTool_0315 = async (notionClient, params = {}) => {
  try {
    const response = await notionClient.search(params);
    return response;
  } catch (error) {
    console.error('Error in searchTool_0315:', error);
    throw error;
  }
};
