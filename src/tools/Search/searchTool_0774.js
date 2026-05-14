/**
 * Generated Tool: searchTool_0774
 * Domain: Search
 * ID: 0774
 */
exports.searchTool_0774 = async (notionClient, params = {}) => {
  try {
    const response = await notionClient.search(params);
    return response;
  } catch (error) {
    console.error('Error in searchTool_0774:', error);
    throw error;
  }
};
