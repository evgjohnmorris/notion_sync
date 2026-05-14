/**
 * Generated Tool: searchTool_0509
 * Domain: Search
 * ID: 0509
 */
exports.searchTool_0509 = async (notionClient, params = {}) => {
  try {
    const response = await notionClient.search(params);
    return response;
  } catch (error) {
    console.error('Error in searchTool_0509:', error);
    throw error;
  }
};
