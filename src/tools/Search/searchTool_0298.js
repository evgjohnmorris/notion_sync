/**
 * Generated Tool: searchTool_0298
 * Domain: Search
 * ID: 0298
 */
exports.searchTool_0298 = async (notionClient, params = {}) => {
  try {
    const response = await notionClient.search(params);
    return response;
  } catch (error) {
    console.error('Error in searchTool_0298:', error);
    throw error;
  }
};
