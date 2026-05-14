/**
 * Generated Tool: searchTool_0581
 * Domain: Search
 * ID: 0581
 */
exports.searchTool_0581 = async (notionClient, params = {}) => {
  try {
    const response = await notionClient.search(params);
    return response;
  } catch (error) {
    console.error('Error in searchTool_0581:', error);
    throw error;
  }
};
