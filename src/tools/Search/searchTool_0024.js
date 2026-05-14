/**
 * Generated Tool: searchTool_0024
 * Domain: Search
 * ID: 0024
 */
exports.searchTool_0024 = async (notionClient, params = {}) => {
  try {
    const response = await notionClient.search(params);
    return response;
  } catch (error) {
    console.error('Error in searchTool_0024:', error);
    throw error;
  }
};
