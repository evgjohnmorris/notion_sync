/**
 * Generated Tool: searchTool_0228
 * Domain: Search
 * ID: 0228
 */
exports.searchTool_0228 = async (notionClient, params = {}) => {
  try {
    const response = await notionClient.search(params);
    return response;
  } catch (error) {
    console.error('Error in searchTool_0228:', error);
    throw error;
  }
};
