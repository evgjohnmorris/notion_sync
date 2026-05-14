/**
 * Generated Tool: searchTool_0211
 * Domain: Search
 * ID: 0211
 */
exports.searchTool_0211 = async (notionClient, params = {}) => {
  try {
    const response = await notionClient.search(params);
    return response;
  } catch (error) {
    console.error('Error in searchTool_0211:', error);
    throw error;
  }
};
