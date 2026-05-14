/**
 * Generated Tool: searchTool_0406
 * Domain: Search
 * ID: 0406
 */
exports.searchTool_0406 = async (notionClient, params = {}) => {
  try {
    const response = await notionClient.search(params);
    return response;
  } catch (error) {
    console.error('Error in searchTool_0406:', error);
    throw error;
  }
};
