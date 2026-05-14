/**
 * Generated Tool: searchTool_0918
 * Domain: Search
 * ID: 0918
 */
exports.searchTool_0918 = async (notionClient, params = {}) => {
  try {
    const response = await notionClient.search(params);
    return response;
  } catch (error) {
    console.error('Error in searchTool_0918:', error);
    throw error;
  }
};
