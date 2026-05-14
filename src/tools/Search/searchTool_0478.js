/**
 * Generated Tool: searchTool_0478
 * Domain: Search
 * ID: 0478
 */
exports.searchTool_0478 = async (notionClient, params = {}) => {
  try {
    const response = await notionClient.search(params);
    return response;
  } catch (error) {
    console.error('Error in searchTool_0478:', error);
    throw error;
  }
};
