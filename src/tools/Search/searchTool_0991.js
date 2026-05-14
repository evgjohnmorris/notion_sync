/**
 * Generated Tool: searchTool_0991
 * Domain: Search
 * ID: 0991
 */
exports.searchTool_0991 = async (notionClient, params = {}) => {
  try {
    const response = await notionClient.search(params);
    return response;
  } catch (error) {
    console.error('Error in searchTool_0991:', error);
    throw error;
  }
};
