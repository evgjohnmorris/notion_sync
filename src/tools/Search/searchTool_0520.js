/**
 * Generated Tool: searchTool_0520
 * Domain: Search
 * ID: 0520
 */
exports.searchTool_0520 = async (notionClient, params = {}) => {
  try {
    const response = await notionClient.search(params);
    return response;
  } catch (error) {
    console.error('Error in searchTool_0520:', error);
    throw error;
  }
};
