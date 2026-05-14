/**
 * Generated Tool: searchTool_0801
 * Domain: Search
 * ID: 0801
 */
exports.searchTool_0801 = async (notionClient, params = {}) => {
  try {
    const response = await notionClient.search(params);
    return response;
  } catch (error) {
    console.error('Error in searchTool_0801:', error);
    throw error;
  }
};
