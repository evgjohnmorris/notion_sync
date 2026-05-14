/**
 * Generated Tool: searchTool_0601
 * Domain: Search
 * ID: 0601
 */
exports.searchTool_0601 = async (notionClient, params = {}) => {
  try {
    const response = await notionClient.search(params);
    return response;
  } catch (error) {
    console.error('Error in searchTool_0601:', error);
    throw error;
  }
};
