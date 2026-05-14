/**
 * Generated Tool: searchTool_0515
 * Domain: Search
 * ID: 0515
 */
exports.searchTool_0515 = async (notionClient, params = {}) => {
  try {
    const response = await notionClient.search(params);
    return response;
  } catch (error) {
    console.error('Error in searchTool_0515:', error);
    throw error;
  }
};
