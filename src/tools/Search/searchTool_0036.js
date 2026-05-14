/**
 * Generated Tool: searchTool_0036
 * Domain: Search
 * ID: 0036
 */
exports.searchTool_0036 = async (notionClient, params = {}) => {
  try {
    const response = await notionClient.search(params);
    return response;
  } catch (error) {
    console.error('Error in searchTool_0036:', error);
    throw error;
  }
};
