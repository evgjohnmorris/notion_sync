/**
 * Generated Tool: searchTool_0241
 * Domain: Search
 * ID: 0241
 */
exports.searchTool_0241 = async (notionClient, params = {}) => {
  try {
    const response = await notionClient.search(params);
    return response;
  } catch (error) {
    console.error('Error in searchTool_0241:', error);
    throw error;
  }
};
