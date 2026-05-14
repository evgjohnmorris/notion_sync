/**
 * Generated Tool: searchTool_0248
 * Domain: Search
 * ID: 0248
 */
exports.searchTool_0248 = async (notionClient, params = {}) => {
  try {
    const response = await notionClient.search(params);
    return response;
  } catch (error) {
    console.error('Error in searchTool_0248:', error);
    throw error;
  }
};
