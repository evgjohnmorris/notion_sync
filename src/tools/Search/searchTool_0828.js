/**
 * Generated Tool: searchTool_0828
 * Domain: Search
 * ID: 0828
 */
exports.searchTool_0828 = async (notionClient, params = {}) => {
  try {
    const response = await notionClient.search(params);
    return response;
  } catch (error) {
    console.error('Error in searchTool_0828:', error);
    throw error;
  }
};
