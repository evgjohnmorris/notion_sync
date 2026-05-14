/**
 * Generated Tool: searchTool_0065
 * Domain: Search
 * ID: 0065
 */
exports.searchTool_0065 = async (notionClient, params = {}) => {
  try {
    const response = await notionClient.search(params);
    return response;
  } catch (error) {
    console.error('Error in searchTool_0065:', error);
    throw error;
  }
};
