/**
 * Generated Tool: searchTool_0318
 * Domain: Search
 * ID: 0318
 */
exports.searchTool_0318 = async (notionClient, params = {}) => {
  try {
    const response = await notionClient.search(params);
    return response;
  } catch (error) {
    console.error('Error in searchTool_0318:', error);
    throw error;
  }
};
