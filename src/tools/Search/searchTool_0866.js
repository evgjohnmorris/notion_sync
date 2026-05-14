/**
 * Generated Tool: searchTool_0866
 * Domain: Search
 * ID: 0866
 */
exports.searchTool_0866 = async (notionClient, params = {}) => {
  try {
    const response = await notionClient.search(params);
    return response;
  } catch (error) {
    console.error('Error in searchTool_0866:', error);
    throw error;
  }
};
