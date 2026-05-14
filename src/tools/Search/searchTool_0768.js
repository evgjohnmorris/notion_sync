/**
 * Generated Tool: searchTool_0768
 * Domain: Search
 * ID: 0768
 */
exports.searchTool_0768 = async (notionClient, params = {}) => {
  try {
    const response = await notionClient.search(params);
    return response;
  } catch (error) {
    console.error('Error in searchTool_0768:', error);
    throw error;
  }
};
