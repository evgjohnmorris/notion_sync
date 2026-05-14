/**
 * Generated Tool: searchTool_0794
 * Domain: Search
 * ID: 0794
 */
exports.searchTool_0794 = async (notionClient, params = {}) => {
  try {
    const response = await notionClient.search(params);
    return response;
  } catch (error) {
    console.error('Error in searchTool_0794:', error);
    throw error;
  }
};
