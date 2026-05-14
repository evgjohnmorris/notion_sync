/**
 * Generated Tool: searchTool_0974
 * Domain: Search
 * ID: 0974
 */
exports.searchTool_0974 = async (notionClient, params = {}) => {
  try {
    const response = await notionClient.search(params);
    return response;
  } catch (error) {
    console.error('Error in searchTool_0974:', error);
    throw error;
  }
};
