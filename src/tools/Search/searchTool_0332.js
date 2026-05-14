/**
 * Generated Tool: searchTool_0332
 * Domain: Search
 * ID: 0332
 */
exports.searchTool_0332 = async (notionClient, params = {}) => {
  try {
    const response = await notionClient.search(params);
    return response;
  } catch (error) {
    console.error('Error in searchTool_0332:', error);
    throw error;
  }
};
