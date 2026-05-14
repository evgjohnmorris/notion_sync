/**
 * Generated Tool: searchTool_0342
 * Domain: Search
 * ID: 0342
 */
exports.searchTool_0342 = async (notionClient, params = {}) => {
  try {
    const response = await notionClient.search(params);
    return response;
  } catch (error) {
    console.error('Error in searchTool_0342:', error);
    throw error;
  }
};
