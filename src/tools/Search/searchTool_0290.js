/**
 * Generated Tool: searchTool_0290
 * Domain: Search
 * ID: 0290
 */
exports.searchTool_0290 = async (notionClient, params = {}) => {
  try {
    const response = await notionClient.search(params);
    return response;
  } catch (error) {
    console.error('Error in searchTool_0290:', error);
    throw error;
  }
};
