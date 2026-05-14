/**
 * Generated Tool: searchTool_0105
 * Domain: Search
 * ID: 0105
 */
exports.searchTool_0105 = async (notionClient, params = {}) => {
  try {
    const response = await notionClient.search(params);
    return response;
  } catch (error) {
    console.error('Error in searchTool_0105:', error);
    throw error;
  }
};
