/**
 * Generated Tool: searchTool_0939
 * Domain: Search
 * ID: 0939
 */
exports.searchTool_0939 = async (notionClient, params = {}) => {
  try {
    const response = await notionClient.search(params);
    return response;
  } catch (error) {
    console.error('Error in searchTool_0939:', error);
    throw error;
  }
};
