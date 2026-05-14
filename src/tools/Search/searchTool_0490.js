/**
 * Generated Tool: searchTool_0490
 * Domain: Search
 * ID: 0490
 */
exports.searchTool_0490 = async (notionClient, params = {}) => {
  try {
    const response = await notionClient.search(params);
    return response;
  } catch (error) {
    console.error('Error in searchTool_0490:', error);
    throw error;
  }
};
