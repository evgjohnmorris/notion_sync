/**
 * Generated Tool: searchTool_0425
 * Domain: Search
 * ID: 0425
 */
exports.searchTool_0425 = async (notionClient, params = {}) => {
  try {
    const response = await notionClient.search(params);
    return response;
  } catch (error) {
    console.error('Error in searchTool_0425:', error);
    throw error;
  }
};
