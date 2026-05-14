/**
 * Generated Tool: searchTool_0080
 * Domain: Search
 * ID: 0080
 */
exports.searchTool_0080 = async (notionClient, params = {}) => {
  try {
    const response = await notionClient.search(params);
    return response;
  } catch (error) {
    console.error('Error in searchTool_0080:', error);
    throw error;
  }
};
