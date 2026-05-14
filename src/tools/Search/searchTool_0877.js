/**
 * Generated Tool: searchTool_0877
 * Domain: Search
 * ID: 0877
 */
exports.searchTool_0877 = async (notionClient, params = {}) => {
  try {
    const response = await notionClient.search(params);
    return response;
  } catch (error) {
    console.error('Error in searchTool_0877:', error);
    throw error;
  }
};
