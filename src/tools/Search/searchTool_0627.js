/**
 * Generated Tool: searchTool_0627
 * Domain: Search
 * ID: 0627
 */
exports.searchTool_0627 = async (notionClient, params = {}) => {
  try {
    const response = await notionClient.search(params);
    return response;
  } catch (error) {
    console.error('Error in searchTool_0627:', error);
    throw error;
  }
};
