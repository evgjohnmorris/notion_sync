/**
 * Generated Tool: searchTool_0234
 * Domain: Search
 * ID: 0234
 */
exports.searchTool_0234 = async (notionClient, params = {}) => {
  try {
    const response = await notionClient.search(params);
    return response;
  } catch (error) {
    console.error('Error in searchTool_0234:', error);
    throw error;
  }
};
