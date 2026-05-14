/**
 * Generated Tool: searchTool_0949
 * Domain: Search
 * ID: 0949
 */
exports.searchTool_0949 = async (notionClient, params = {}) => {
  try {
    const response = await notionClient.search(params);
    return response;
  } catch (error) {
    console.error('Error in searchTool_0949:', error);
    throw error;
  }
};
