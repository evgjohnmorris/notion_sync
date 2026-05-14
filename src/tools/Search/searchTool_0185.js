/**
 * Generated Tool: searchTool_0185
 * Domain: Search
 * ID: 0185
 */
exports.searchTool_0185 = async (notionClient, params = {}) => {
  try {
    const response = await notionClient.search(params);
    return response;
  } catch (error) {
    console.error('Error in searchTool_0185:', error);
    throw error;
  }
};
