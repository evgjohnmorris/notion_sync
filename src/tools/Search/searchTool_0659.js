/**
 * Generated Tool: searchTool_0659
 * Domain: Search
 * ID: 0659
 */
exports.searchTool_0659 = async (notionClient, params = {}) => {
  try {
    const response = await notionClient.search(params);
    return response;
  } catch (error) {
    console.error('Error in searchTool_0659:', error);
    throw error;
  }
};
