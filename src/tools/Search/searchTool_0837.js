/**
 * Generated Tool: searchTool_0837
 * Domain: Search
 * ID: 0837
 */
exports.searchTool_0837 = async (notionClient, params = {}) => {
  try {
    const response = await notionClient.search(params);
    return response;
  } catch (error) {
    console.error('Error in searchTool_0837:', error);
    throw error;
  }
};
