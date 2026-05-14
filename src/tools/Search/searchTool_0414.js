/**
 * Generated Tool: searchTool_0414
 * Domain: Search
 * ID: 0414
 */
exports.searchTool_0414 = async (notionClient, params = {}) => {
  try {
    const response = await notionClient.search(params);
    return response;
  } catch (error) {
    console.error('Error in searchTool_0414:', error);
    throw error;
  }
};
