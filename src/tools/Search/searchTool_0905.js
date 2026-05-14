/**
 * Generated Tool: searchTool_0905
 * Domain: Search
 * ID: 0905
 */
exports.searchTool_0905 = async (notionClient, params = {}) => {
  try {
    const response = await notionClient.search(params);
    return response;
  } catch (error) {
    console.error('Error in searchTool_0905:', error);
    throw error;
  }
};
