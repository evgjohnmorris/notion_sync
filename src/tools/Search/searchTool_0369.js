/**
 * Generated Tool: searchTool_0369
 * Domain: Search
 * ID: 0369
 */
exports.searchTool_0369 = async (notionClient, params = {}) => {
  try {
    const response = await notionClient.search(params);
    return response;
  } catch (error) {
    console.error('Error in searchTool_0369:', error);
    throw error;
  }
};
