/**
 * Generated Tool: searchTool_0956
 * Domain: Search
 * ID: 0956
 */
exports.searchTool_0956 = async (notionClient, params = {}) => {
  try {
    const response = await notionClient.search(params);
    return response;
  } catch (error) {
    console.error('Error in searchTool_0956:', error);
    throw error;
  }
};
