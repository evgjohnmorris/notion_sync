/**
 * Generated Tool: searchTool_0140
 * Domain: Search
 * ID: 0140
 */
exports.searchTool_0140 = async (notionClient, params = {}) => {
  try {
    const response = await notionClient.search(params);
    return response;
  } catch (error) {
    console.error('Error in searchTool_0140:', error);
    throw error;
  }
};
