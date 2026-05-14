/**
 * Generated Tool: searchTool_0778
 * Domain: Search
 * ID: 0778
 */
exports.searchTool_0778 = async (notionClient, params = {}) => {
  try {
    const response = await notionClient.search(params);
    return response;
  } catch (error) {
    console.error('Error in searchTool_0778:', error);
    throw error;
  }
};
