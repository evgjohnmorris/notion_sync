/**
 * Generated Tool: searchTool_0362
 * Domain: Search
 * ID: 0362
 */
exports.searchTool_0362 = async (notionClient, params = {}) => {
  try {
    const response = await notionClient.search(params);
    return response;
  } catch (error) {
    console.error('Error in searchTool_0362:', error);
    throw error;
  }
};
