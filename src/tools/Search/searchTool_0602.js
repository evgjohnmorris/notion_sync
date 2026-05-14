/**
 * Generated Tool: searchTool_0602
 * Domain: Search
 * ID: 0602
 */
exports.searchTool_0602 = async (notionClient, params = {}) => {
  try {
    const response = await notionClient.search(params);
    return response;
  } catch (error) {
    console.error('Error in searchTool_0602:', error);
    throw error;
  }
};
