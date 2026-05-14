/**
 * Generated Tool: searchTool_0544
 * Domain: Search
 * ID: 0544
 */
exports.searchTool_0544 = async (notionClient, params = {}) => {
  try {
    const response = await notionClient.search(params);
    return response;
  } catch (error) {
    console.error('Error in searchTool_0544:', error);
    throw error;
  }
};
