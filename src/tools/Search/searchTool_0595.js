/**
 * Generated Tool: searchTool_0595
 * Domain: Search
 * ID: 0595
 */
exports.searchTool_0595 = async (notionClient, params = {}) => {
  try {
    const response = await notionClient.search(params);
    return response;
  } catch (error) {
    console.error('Error in searchTool_0595:', error);
    throw error;
  }
};
