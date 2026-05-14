/**
 * Generated Tool: searchTool_0418
 * Domain: Search
 * ID: 0418
 */
exports.searchTool_0418 = async (notionClient, params = {}) => {
  try {
    const response = await notionClient.search(params);
    return response;
  } catch (error) {
    console.error('Error in searchTool_0418:', error);
    throw error;
  }
};
