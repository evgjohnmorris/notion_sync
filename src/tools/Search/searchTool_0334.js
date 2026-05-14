/**
 * Generated Tool: searchTool_0334
 * Domain: Search
 * ID: 0334
 */
exports.searchTool_0334 = async (notionClient, params = {}) => {
  try {
    const response = await notionClient.search(params);
    return response;
  } catch (error) {
    console.error('Error in searchTool_0334:', error);
    throw error;
  }
};
