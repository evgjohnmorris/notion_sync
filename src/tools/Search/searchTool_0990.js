/**
 * Generated Tool: searchTool_0990
 * Domain: Search
 * ID: 0990
 */
exports.searchTool_0990 = async (notionClient, params = {}) => {
  try {
    const response = await notionClient.search(params);
    return response;
  } catch (error) {
    console.error('Error in searchTool_0990:', error);
    throw error;
  }
};
