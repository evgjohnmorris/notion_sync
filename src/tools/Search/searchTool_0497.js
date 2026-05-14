/**
 * Generated Tool: searchTool_0497
 * Domain: Search
 * ID: 0497
 */
exports.searchTool_0497 = async (notionClient, params = {}) => {
  try {
    const response = await notionClient.search(params);
    return response;
  } catch (error) {
    console.error('Error in searchTool_0497:', error);
    throw error;
  }
};
