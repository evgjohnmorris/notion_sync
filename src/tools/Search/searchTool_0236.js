/**
 * Generated Tool: searchTool_0236
 * Domain: Search
 * ID: 0236
 */
exports.searchTool_0236 = async (notionClient, params = {}) => {
  try {
    const response = await notionClient.search(params);
    return response;
  } catch (error) {
    console.error('Error in searchTool_0236:', error);
    throw error;
  }
};
