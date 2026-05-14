/**
 * Generated Tool: searchTool_0273
 * Domain: Search
 * ID: 0273
 */
exports.searchTool_0273 = async (notionClient, params = {}) => {
  try {
    const response = await notionClient.search(params);
    return response;
  } catch (error) {
    console.error('Error in searchTool_0273:', error);
    throw error;
  }
};
