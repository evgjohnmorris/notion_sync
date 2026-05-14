/**
 * Generated Tool: searchTool_0288
 * Domain: Search
 * ID: 0288
 */
exports.searchTool_0288 = async (notionClient, params = {}) => {
  try {
    const response = await notionClient.search(params);
    return response;
  } catch (error) {
    console.error('Error in searchTool_0288:', error);
    throw error;
  }
};
