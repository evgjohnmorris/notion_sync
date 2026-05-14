/**
 * Generated Tool: searchTool_0372
 * Domain: Search
 * ID: 0372
 */
exports.searchTool_0372 = async (notionClient, params = {}) => {
  try {
    const response = await notionClient.search(params);
    return response;
  } catch (error) {
    console.error('Error in searchTool_0372:', error);
    throw error;
  }
};
