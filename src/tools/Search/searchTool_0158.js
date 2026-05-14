/**
 * Generated Tool: searchTool_0158
 * Domain: Search
 * ID: 0158
 */
exports.searchTool_0158 = async (notionClient, params = {}) => {
  try {
    const response = await notionClient.search(params);
    return response;
  } catch (error) {
    console.error('Error in searchTool_0158:', error);
    throw error;
  }
};
