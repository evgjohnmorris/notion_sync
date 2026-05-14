/**
 * Generated Tool: searchTool_0282
 * Domain: Search
 * ID: 0282
 */
exports.searchTool_0282 = async (notionClient, params = {}) => {
  try {
    const response = await notionClient.search(params);
    return response;
  } catch (error) {
    console.error('Error in searchTool_0282:', error);
    throw error;
  }
};
