/**
 * Generated Tool: searchTool_0495
 * Domain: Search
 * ID: 0495
 */
exports.searchTool_0495 = async (notionClient, params = {}) => {
  try {
    const response = await notionClient.search(params);
    return response;
  } catch (error) {
    console.error('Error in searchTool_0495:', error);
    throw error;
  }
};
