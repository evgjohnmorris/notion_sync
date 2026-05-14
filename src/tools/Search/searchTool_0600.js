/**
 * Generated Tool: searchTool_0600
 * Domain: Search
 * ID: 0600
 */
exports.searchTool_0600 = async (notionClient, params = {}) => {
  try {
    const response = await notionClient.search(params);
    return response;
  } catch (error) {
    console.error('Error in searchTool_0600:', error);
    throw error;
  }
};
