/**
 * Generated Tool: searchTool_0913
 * Domain: Search
 * ID: 0913
 */
exports.searchTool_0913 = async (notionClient, params = {}) => {
  try {
    const response = await notionClient.search(params);
    return response;
  } catch (error) {
    console.error('Error in searchTool_0913:', error);
    throw error;
  }
};
