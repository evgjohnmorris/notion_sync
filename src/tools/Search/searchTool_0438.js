/**
 * Generated Tool: searchTool_0438
 * Domain: Search
 * ID: 0438
 */
exports.searchTool_0438 = async (notionClient, params = {}) => {
  try {
    const response = await notionClient.search(params);
    return response;
  } catch (error) {
    console.error('Error in searchTool_0438:', error);
    throw error;
  }
};
