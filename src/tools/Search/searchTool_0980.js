/**
 * Generated Tool: searchTool_0980
 * Domain: Search
 * ID: 0980
 */
exports.searchTool_0980 = async (notionClient, params = {}) => {
  try {
    const response = await notionClient.search(params);
    return response;
  } catch (error) {
    console.error('Error in searchTool_0980:', error);
    throw error;
  }
};
