/**
 * Generated Tool: searchTool_0909
 * Domain: Search
 * ID: 0909
 */
exports.searchTool_0909 = async (notionClient, params = {}) => {
  try {
    const response = await notionClient.search(params);
    return response;
  } catch (error) {
    console.error('Error in searchTool_0909:', error);
    throw error;
  }
};
