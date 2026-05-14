/**
 * Generated Tool: searchTool_0583
 * Domain: Search
 * ID: 0583
 */
exports.searchTool_0583 = async (notionClient, params = {}) => {
  try {
    const response = await notionClient.search(params);
    return response;
  } catch (error) {
    console.error('Error in searchTool_0583:', error);
    throw error;
  }
};
