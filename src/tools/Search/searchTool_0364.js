/**
 * Generated Tool: searchTool_0364
 * Domain: Search
 * ID: 0364
 */
exports.searchTool_0364 = async (notionClient, params = {}) => {
  try {
    const response = await notionClient.search(params);
    return response;
  } catch (error) {
    console.error('Error in searchTool_0364:', error);
    throw error;
  }
};
