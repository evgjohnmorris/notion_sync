/**
 * Generated Tool: searchTool_0748
 * Domain: Search
 * ID: 0748
 */
exports.searchTool_0748 = async (notionClient, params = {}) => {
  try {
    const response = await notionClient.search(params);
    return response;
  } catch (error) {
    console.error('Error in searchTool_0748:', error);
    throw error;
  }
};
