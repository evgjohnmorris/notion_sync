/**
 * Generated Tool: searchTool_0098
 * Domain: Search
 * ID: 0098
 */
exports.searchTool_0098 = async (notionClient, params = {}) => {
  try {
    const response = await notionClient.search(params);
    return response;
  } catch (error) {
    console.error('Error in searchTool_0098:', error);
    throw error;
  }
};
