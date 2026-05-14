/**
 * Generated Tool: searchTool_0050
 * Domain: Search
 * ID: 0050
 */
exports.searchTool_0050 = async (notionClient, params = {}) => {
  try {
    const response = await notionClient.search(params);
    return response;
  } catch (error) {
    console.error('Error in searchTool_0050:', error);
    throw error;
  }
};
