/**
 * Generated Tool: searchTool_0000
 * Domain: Search
 * ID: 0000
 */
exports.searchTool_0000 = async (notionClient, params = {}) => {
  try {
    const response = await notionClient.search(params);
    return response;
  } catch (error) {
    console.error('Error in searchTool_0000:', error);
    throw error;
  }
};
