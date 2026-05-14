/**
 * Generated Tool: searchTool_0306
 * Domain: Search
 * ID: 0306
 */
exports.searchTool_0306 = async (notionClient, params = {}) => {
  try {
    const response = await notionClient.search(params);
    return response;
  } catch (error) {
    console.error('Error in searchTool_0306:', error);
    throw error;
  }
};
