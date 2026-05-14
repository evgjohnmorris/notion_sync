/**
 * Generated Tool: searchTool_0061
 * Domain: Search
 * ID: 0061
 */
exports.searchTool_0061 = async (notionClient, params = {}) => {
  try {
    const response = await notionClient.search(params);
    return response;
  } catch (error) {
    console.error('Error in searchTool_0061:', error);
    throw error;
  }
};
