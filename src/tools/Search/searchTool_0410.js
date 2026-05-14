/**
 * Generated Tool: searchTool_0410
 * Domain: Search
 * ID: 0410
 */
exports.searchTool_0410 = async (notionClient, params = {}) => {
  try {
    const response = await notionClient.search(params);
    return response;
  } catch (error) {
    console.error('Error in searchTool_0410:', error);
    throw error;
  }
};
