/**
 * Generated Tool: searchTool_0006
 * Domain: Search
 * ID: 0006
 */
exports.searchTool_0006 = async (notionClient, params = {}) => {
  try {
    const response = await notionClient.search(params);
    return response;
  } catch (error) {
    console.error('Error in searchTool_0006:', error);
    throw error;
  }
};
