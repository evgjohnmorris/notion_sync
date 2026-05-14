/**
 * Generated Tool: searchTool_0368
 * Domain: Search
 * ID: 0368
 */
exports.searchTool_0368 = async (notionClient, params = {}) => {
  try {
    const response = await notionClient.search(params);
    return response;
  } catch (error) {
    console.error('Error in searchTool_0368:', error);
    throw error;
  }
};
