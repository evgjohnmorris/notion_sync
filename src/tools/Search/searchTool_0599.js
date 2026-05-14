/**
 * Generated Tool: searchTool_0599
 * Domain: Search
 * ID: 0599
 */
exports.searchTool_0599 = async (notionClient, params = {}) => {
  try {
    const response = await notionClient.search(params);
    return response;
  } catch (error) {
    console.error('Error in searchTool_0599:', error);
    throw error;
  }
};
