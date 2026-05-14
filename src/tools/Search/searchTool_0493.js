/**
 * Generated Tool: searchTool_0493
 * Domain: Search
 * ID: 0493
 */
exports.searchTool_0493 = async (notionClient, params = {}) => {
  try {
    const response = await notionClient.search(params);
    return response;
  } catch (error) {
    console.error('Error in searchTool_0493:', error);
    throw error;
  }
};
