/**
 * Generated Tool: searchTool_0844
 * Domain: Search
 * ID: 0844
 */
exports.searchTool_0844 = async (notionClient, params = {}) => {
  try {
    const response = await notionClient.search(params);
    return response;
  } catch (error) {
    console.error('Error in searchTool_0844:', error);
    throw error;
  }
};
