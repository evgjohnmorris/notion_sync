/**
 * Generated Tool: searchTool_0302
 * Domain: Search
 * ID: 0302
 */
exports.searchTool_0302 = async (notionClient, params = {}) => {
  try {
    const response = await notionClient.search(params);
    return response;
  } catch (error) {
    console.error('Error in searchTool_0302:', error);
    throw error;
  }
};
