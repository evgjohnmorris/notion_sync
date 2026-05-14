/**
 * Generated Tool: searchTool_0361
 * Domain: Search
 * ID: 0361
 */
exports.searchTool_0361 = async (notionClient, params = {}) => {
  try {
    const response = await notionClient.search(params);
    return response;
  } catch (error) {
    console.error('Error in searchTool_0361:', error);
    throw error;
  }
};
