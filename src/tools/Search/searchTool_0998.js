/**
 * Generated Tool: searchTool_0998
 * Domain: Search
 * ID: 0998
 */
exports.searchTool_0998 = async (notionClient, params = {}) => {
  try {
    const response = await notionClient.search(params);
    return response;
  } catch (error) {
    console.error('Error in searchTool_0998:', error);
    throw error;
  }
};
