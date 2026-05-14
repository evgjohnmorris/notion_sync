/**
 * Generated Tool: searchTool_0400
 * Domain: Search
 * ID: 0400
 */
exports.searchTool_0400 = async (notionClient, params = {}) => {
  try {
    const response = await notionClient.search(params);
    return response;
  } catch (error) {
    console.error('Error in searchTool_0400:', error);
    throw error;
  }
};
