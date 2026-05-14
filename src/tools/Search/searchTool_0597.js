/**
 * Generated Tool: searchTool_0597
 * Domain: Search
 * ID: 0597
 */
exports.searchTool_0597 = async (notionClient, params = {}) => {
  try {
    const response = await notionClient.search(params);
    return response;
  } catch (error) {
    console.error('Error in searchTool_0597:', error);
    throw error;
  }
};
