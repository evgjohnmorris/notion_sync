/**
 * Generated Tool: searchTool_0565
 * Domain: Search
 * ID: 0565
 */
exports.searchTool_0565 = async (notionClient, params = {}) => {
  try {
    const response = await notionClient.search(params);
    return response;
  } catch (error) {
    console.error('Error in searchTool_0565:', error);
    throw error;
  }
};
