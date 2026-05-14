/**
 * Generated Tool: searchTool_0310
 * Domain: Search
 * ID: 0310
 */
exports.searchTool_0310 = async (notionClient, params = {}) => {
  try {
    const response = await notionClient.search(params);
    return response;
  } catch (error) {
    console.error('Error in searchTool_0310:', error);
    throw error;
  }
};
