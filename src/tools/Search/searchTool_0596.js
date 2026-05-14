/**
 * Generated Tool: searchTool_0596
 * Domain: Search
 * ID: 0596
 */
exports.searchTool_0596 = async (notionClient, params = {}) => {
  try {
    const response = await notionClient.search(params);
    return response;
  } catch (error) {
    console.error('Error in searchTool_0596:', error);
    throw error;
  }
};
