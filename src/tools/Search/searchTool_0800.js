/**
 * Generated Tool: searchTool_0800
 * Domain: Search
 * ID: 0800
 */
exports.searchTool_0800 = async (notionClient, params = {}) => {
  try {
    const response = await notionClient.search(params);
    return response;
  } catch (error) {
    console.error('Error in searchTool_0800:', error);
    throw error;
  }
};
