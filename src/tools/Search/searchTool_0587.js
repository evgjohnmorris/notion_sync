/**
 * Generated Tool: searchTool_0587
 * Domain: Search
 * ID: 0587
 */
exports.searchTool_0587 = async (notionClient, params = {}) => {
  try {
    const response = await notionClient.search(params);
    return response;
  } catch (error) {
    console.error('Error in searchTool_0587:', error);
    throw error;
  }
};
