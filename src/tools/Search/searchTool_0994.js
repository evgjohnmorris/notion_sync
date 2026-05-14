/**
 * Generated Tool: searchTool_0994
 * Domain: Search
 * ID: 0994
 */
exports.searchTool_0994 = async (notionClient, params = {}) => {
  try {
    const response = await notionClient.search(params);
    return response;
  } catch (error) {
    console.error('Error in searchTool_0994:', error);
    throw error;
  }
};
