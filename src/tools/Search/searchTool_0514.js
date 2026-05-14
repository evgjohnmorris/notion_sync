/**
 * Generated Tool: searchTool_0514
 * Domain: Search
 * ID: 0514
 */
exports.searchTool_0514 = async (notionClient, params = {}) => {
  try {
    const response = await notionClient.search(params);
    return response;
  } catch (error) {
    console.error('Error in searchTool_0514:', error);
    throw error;
  }
};
