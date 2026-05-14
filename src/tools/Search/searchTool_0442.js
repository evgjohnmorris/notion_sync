/**
 * Generated Tool: searchTool_0442
 * Domain: Search
 * ID: 0442
 */
exports.searchTool_0442 = async (notionClient, params = {}) => {
  try {
    const response = await notionClient.search(params);
    return response;
  } catch (error) {
    console.error('Error in searchTool_0442:', error);
    throw error;
  }
};
