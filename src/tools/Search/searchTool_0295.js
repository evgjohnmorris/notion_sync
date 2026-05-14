/**
 * Generated Tool: searchTool_0295
 * Domain: Search
 * ID: 0295
 */
exports.searchTool_0295 = async (notionClient, params = {}) => {
  try {
    const response = await notionClient.search(params);
    return response;
  } catch (error) {
    console.error('Error in searchTool_0295:', error);
    throw error;
  }
};
