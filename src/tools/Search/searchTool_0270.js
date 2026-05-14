/**
 * Generated Tool: searchTool_0270
 * Domain: Search
 * ID: 0270
 */
exports.searchTool_0270 = async (notionClient, params = {}) => {
  try {
    const response = await notionClient.search(params);
    return response;
  } catch (error) {
    console.error('Error in searchTool_0270:', error);
    throw error;
  }
};
