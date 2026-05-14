/**
 * Generated Tool: searchTool_0810
 * Domain: Search
 * ID: 0810
 */
exports.searchTool_0810 = async (notionClient, params = {}) => {
  try {
    const response = await notionClient.search(params);
    return response;
  } catch (error) {
    console.error('Error in searchTool_0810:', error);
    throw error;
  }
};
