/**
 * Generated Tool: searchTool_0571
 * Domain: Search
 * ID: 0571
 */
exports.searchTool_0571 = async (notionClient, params = {}) => {
  try {
    const response = await notionClient.search(params);
    return response;
  } catch (error) {
    console.error('Error in searchTool_0571:', error);
    throw error;
  }
};
