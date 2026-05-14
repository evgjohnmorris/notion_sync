/**
 * Generated Tool: searchTool_0137
 * Domain: Search
 * ID: 0137
 */
exports.searchTool_0137 = async (notionClient, params = {}) => {
  try {
    const response = await notionClient.search(params);
    return response;
  } catch (error) {
    console.error('Error in searchTool_0137:', error);
    throw error;
  }
};
