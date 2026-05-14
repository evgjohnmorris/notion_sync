/**
 * Generated Tool: searchTool_0512
 * Domain: Search
 * ID: 0512
 */
exports.searchTool_0512 = async (notionClient, params = {}) => {
  try {
    const response = await notionClient.search(params);
    return response;
  } catch (error) {
    console.error('Error in searchTool_0512:', error);
    throw error;
  }
};
