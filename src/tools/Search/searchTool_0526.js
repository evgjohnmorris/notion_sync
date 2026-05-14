/**
 * Generated Tool: searchTool_0526
 * Domain: Search
 * ID: 0526
 */
exports.searchTool_0526 = async (notionClient, params = {}) => {
  try {
    const response = await notionClient.search(params);
    return response;
  } catch (error) {
    console.error('Error in searchTool_0526:', error);
    throw error;
  }
};
