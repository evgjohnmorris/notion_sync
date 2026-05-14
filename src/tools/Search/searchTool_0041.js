/**
 * Generated Tool: searchTool_0041
 * Domain: Search
 * ID: 0041
 */
exports.searchTool_0041 = async (notionClient, params = {}) => {
  try {
    const response = await notionClient.search(params);
    return response;
  } catch (error) {
    console.error('Error in searchTool_0041:', error);
    throw error;
  }
};
