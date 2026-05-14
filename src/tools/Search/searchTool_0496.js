/**
 * Generated Tool: searchTool_0496
 * Domain: Search
 * ID: 0496
 */
exports.searchTool_0496 = async (notionClient, params = {}) => {
  try {
    const response = await notionClient.search(params);
    return response;
  } catch (error) {
    console.error('Error in searchTool_0496:', error);
    throw error;
  }
};
