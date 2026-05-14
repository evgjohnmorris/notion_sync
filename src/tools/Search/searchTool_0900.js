/**
 * Generated Tool: searchTool_0900
 * Domain: Search
 * ID: 0900
 */
exports.searchTool_0900 = async (notionClient, params = {}) => {
  try {
    const response = await notionClient.search(params);
    return response;
  } catch (error) {
    console.error('Error in searchTool_0900:', error);
    throw error;
  }
};
