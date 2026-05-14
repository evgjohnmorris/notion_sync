/**
 * Generated Tool: searchTool_0148
 * Domain: Search
 * ID: 0148
 */
exports.searchTool_0148 = async (notionClient, params = {}) => {
  try {
    const response = await notionClient.search(params);
    return response;
  } catch (error) {
    console.error('Error in searchTool_0148:', error);
    throw error;
  }
};
